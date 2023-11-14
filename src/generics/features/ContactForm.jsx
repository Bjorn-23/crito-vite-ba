import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import FormError from '../utilities/FormError'

const ContactForm = () => {
    const [feedback, setFeedback] = useState(undefined)
    const emailRegxp = new RegExp(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)

    const initialValues = {
        name: "",
        email: "",
        message: "",
        terms: false,
    }

    const validationSchema = Yup.object({ 
        name: Yup.string() // Comment this and the following 2 lines out to test the error message for 400 bad request.
            .required(`Name is required`)
            .min(2, 'Name must be at least 2 characters long'),
        email: Yup.string()
            .required(`Email is required`)
            .matches(emailRegxp, 'Email must be valid'),
        message: Yup.string()
            .required(`Message can't be empty`)
            .min(5, 'Message needs to be at least 5 characters long')
            .max(400, 'Message maixumum length is 1000 characters'),
        terms: Yup.boolean()
            .oneOf([true], 'Terms & Conditions have to be accepted')
    })

    const onSubmit = async (values, onSubmitProps) => {

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)

        })

        switch (result.status) {
            case 200:
                onSubmitProps.setSubmitting(false)
                onSubmitProps.resetForm()
                setFeedback(true)
                clearFeedback()
                break;
            case 400:
                setFeedback(false)
                break;
        }
    }

    const clearFeedback = () => {
        setInterval(() => {
            setFeedback(undefined)
        }, 6000);

        clearInterval()
    }
    
    
   
    return (
<>
        
        <div className="message-us" id="#message-us">
            <h2 className="message-title">Leave us a message for any information.</h2>
            
            <div className={feedback === true ? "form-feedback" : '' }><p>{feedback === true ? 'Message Sent - We Will Be In Touch!' : '' }</p></div>
            <div className={feedback === false ? "form-feedback-error" : '' }><p>{feedback === false ? 'Form not submitted - contact support if problem persists' : '' }</p></div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} >

                <Form noValidate>
                    <div>
                        <label htmlFor="formName"><ErrorMessage name='name' component={FormError}/></label>
                        <Field id="formName" type="text" name="name" placeholder="Your Full Name...*" />
                    </div>

                    <div>
                        <label htmlFor="formEmail"><ErrorMessage name='email' component={FormError} /></label>
                        <Field id="formEmail" type="email" name="email" placeholder="Your E-mail...*" />
                    </div>

                    <div>
                        <label htmlFor="formMesage"><ErrorMessage name='message' component={FormError} /></label>
                        <Field as="textarea" id="formMessage" rows="5" name="message" placeholder="Your Message...*" />
                    </div>

                    <div>
                        <label htmlFor="formTerms"><ErrorMessage name='terms' component={FormError} /></label>
                        <span className="formTerms">I have read and agree to the <Link to="#">terms & conditions</Link>.</span>
                        <Field id="formTerms" className="formTerms" type="checkbox" name="terms" />
                    </div>

                    <button type="submit" className="submit btn-yellow btn-main">Send Message<i
                        className="fa-solid fa-arrow-up-right"></i></button>
                </Form>

            </Formik>

        </div>
</>
    )

}

export default ContactForm
