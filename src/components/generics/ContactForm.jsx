import React from 'react'
// import FormVaildation from '@generics/FormValidation'

const ContactForm = () => {
        return (

        <div className="message-us" id="#message-us">
            <h2 className="message-title">Leave us a message for any information.</h2>

            <form  noValidate>

                {/* <label htmlFor="name" className="c_labels visually-hidden-focusable" tabIndex="0">Your Name</label> */}
                <input id="name" type="text" name="name" placeholder="Your Full Name...*" required />
                <span id="name-error"></span>

                {/* <label htmlFor="email" className="c_labels visually-hidden-focusable" tabIndex="0">Your E-mail</label> */}
                <input id="email" type="email" name="email" placeholder="Your E-mail...*" required />
                <span id="email-error"></span>
                
                {/* <label htmlFor="message" className="c_labels visually-hidden-focusable" tabIndex="0">Your Message</label> */}
                <textarea id="message" type="text" rows="5" name="message" placeholder="Your Message...*" required />
                <span id="message-error"></span>

                <button id="c_submit" type="submit" className="submit btn-yellow">Send Message<i
                    className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>

)
       
}

export default ContactForm

// for validating form
// onKeyUp={validate(this)}
// onSubmit={handleForm(event)}

// id="contactForm" - id for <form>

// onSubmit={<FormVaildation />}