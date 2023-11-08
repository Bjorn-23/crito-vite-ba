import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
    const emailRegxp = new RegExp(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)
    
    const [errorMessage, setErrorMessage] = useState('')
   
    const form = useFormik({

        initialValues: {
            name: "",
            email: "",
            message: "",
            terms: false,

        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required('Name missing')
                .min(2, 'Your name must be at least 2 characters long'),
            email: Yup.string()
                .required('Email missing')
                // .email('Email must be valid')
                .matches(emailRegxp, 'Email must be valid'),
            message: Yup.string() 
                .required(`Message can't be empty`)
                .min(5, 'Message needs to be at least 5 characters long')
                .max(1000, 'Maixumum message length is 1000 characters'),
            terms: Yup.boolean()
                // .required('Terms & Conditions have to be accepted')              
                .oneOf([true], 'Terms & Conditions have to be accepted')              
        }),

        onSubmit: async (values) => {          

            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(values)
               
            })

            switch (result.status) {
                case 200:
                    form.resetForm()
                    alert('Message sent')
                    setErrorMessage('')
                    break;
                case 400:
                    setErrorMessage('Invalid input - please make sure all fields are filled in')
                    break;
            }
        }
    })


    return (

        <div className="message-us" id="#message-us">
            <h2 className="message-title">Leave us a message for any information.</h2>


          <form onSubmit={form.handleSubmit} noValidate>
                <p className="errorMessage">{errorMessage}</p>
                <div>
                    <label className={form.errors.name && form.touched.name ? 'error' : ''} htmlFor="formName">{form.errors.name && form.touched.name ? form.errors.name : 'Name' }</label>
                    <input className={form.errors.name && form.touched.name ? 'errorInputField' : ''} id="formName" type="text" name="name" placeholder="Your Full Name...*" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} required />
                </div>

                <div>
                    <label className={form.touched.email && form.errors.email  ? 'error' : ''} htmlFor="formEmail">{form.touched.email && form.errors.email ? form.errors.email : 'Email'}</label>
                    <input className={form.touched.email && form.errors.email  ? 'errorInputField' : ''} id="formEmail" type="email" name="email" placeholder="Your E-mail...*" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} required />
                </div>

                <div>
                    <label className={form.touched.message && form.errors.message ? 'error' : ''} htmlFor="formMesage">{form.touched.message && form.errors.message ? form.errors.message : 'Message' }</label>
                    <textarea className={form.touched.message && form.errors.message ? 'errorInputField' : ''} id="formMessage" type="text" rows="5" name="message" placeholder="Your Message...*" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} required />
                </div>

                <div>
                    <p className={form.touched.terms && form.errors.terms ? 'error terms' : 'terms'}>{form.touched.terms && form.errors.terms ? form.errors.terms : 'Terms & Conditions' }</p>
                    <label htmlFor="formTerms">I have read and agree to the <Link to="#">terms & conditions</Link>.</label>
                    <input id="formTerms" type="checkbox" name="terms" checked={form.values.terms.isTrue} onChange={form.handleChange} onBlur={form.handleBlur} required />
                </div>

                <button type="submit"  className="submit btn-yellow">Send Message<i
                    className="fa-solid fa-arrow-up-right"></i></button>
            </form>

        </div>
    )

}

export default ContactForm
