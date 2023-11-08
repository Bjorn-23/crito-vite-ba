import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import FormError from './FormError'


const ContactForm = () => {
    const emailRegxp = new RegExp(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)

    const initialValues = {
        name: "",
        email: "",
        message: "",
        terms: false,
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required(`Name is required`)
            .min(2, 'Name must be at least 2 characters long'),
        email: Yup.string()
            .required(`Email is required`)
            .matches(emailRegxp, 'Email must be valid'),
        message: Yup.string()
            .required(`Message can't be empty`)
            .min(5, 'Message needs to be at least 5 characters long')
            .max(1000, 'Message maixumum length is 1000 characters'),
        terms: Yup.boolean()
            // .required('Terms & Conditions have to be accepted')              
            .oneOf([true], 'Terms & Conditions have to be accepted')
    })

    const onSubmit = async (values) => {
        console.log(form.errors)

        // const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        //     method: 'post',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(values)

        // })

        // switch (result.status) {
        //     case 200:
        //         form.resetForm()
        //         alert('Message sent')
        //         setErrorMessage('')
        //         break;
        //     case 400:
        //         setErrorMessage('Invalid input - please make sure all fields are filled in')
        //         break;
        // }
    }

    console.log()


    return (

        <div className="message-us" id="#message-us">
            <h2 className="message-title">Leave us a message for any information.</h2>


            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                <Form>
                    <div>
                        <label htmlFor="formName"><ErrorMessage name='name' component={FormError} /></label>
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
                        <span><ErrorMessage name='terms' component={FormError} /></span>
                        <label htmlFor="formTerms">I have read and agree to the <Link to="#">terms & conditions</Link>.</label>
                        <Field id="formTerms" type="checkbox" name="terms" />
                    </div>

                    <button type="submit" className="submit btn-yellow">Send Message<i
                        className="fa-solid fa-arrow-up-right"></i></button>
                </Form>
            </Formik>

        </div>
    )

}

export default ContactForm
