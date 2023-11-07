import React from 'react'

const ContactForm = () => {




    return (

        <div className="message-us" id="#message-us">
            <h2 className="message-title">Leave us a message for any information.</h2>

            <form noValidate>
                <p className="error-message"></p>
                <div>
                    <input id="name" type="text" name="name" placeholder="Your Full Name...*" required />
                    <span id="name-error"></span>
                </div>

                <div>
                    <input id="email" type="email" name="email" placeholder="Your E-mail...*" required />
                    <span id="email-error"></span>
                </div>

                <div>
                    <textarea id="message" type="text" rows="5" name="message" placeholder="Your Message...*" required />
                    <span id="message-error"></span></div>

                <button id="c_submit" type="submit" className="submit btn-yellow">Send Message<i
                    className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    )

}

export default ContactForm
