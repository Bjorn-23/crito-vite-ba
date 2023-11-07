import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'

const ContactForm = () => {

    const [errorMessage, setErrorMessage] = useState('')
 
    const form = useFormik({

        initialValues: {
            name: "",
            email: "",
            message: "",
            terms: false,

        },

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
                    <input type="text" name="name" placeholder="Your Full Name...*" value={form.values.name} onChange={form.handleChange} required />
                    <span id="name-error"></span>
                </div>

                <div>
                    <input type="email" name="email" placeholder="Your E-mail...*" value={form.values.email} onChange={form.handleChange} required />
                    <span id="email-error"></span>
                </div>

                <div>
                    <textarea type="text" rows="5" name="message" placeholder="Your Message...*" value={form.values.message} onChange={form.handleChange} required />
                    <span id="message-error"></span>
                </div>

                <div>
                    <input type="checkbox" name="terms" checked={form.values.terms} onChange={form.handleChange} required />
                    <span id="terms-error"></span>
                </div>

                <button type="submit" disabled={!form.values.terms} className="submit btn-yellow">Send Message<i
                    className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    )

}

export default ContactForm
