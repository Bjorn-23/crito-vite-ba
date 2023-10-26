import React from 'react'

import ContactForm from './generics/ContactForm'
import ContactMap from './ContactMap'

const ContactInfo = () => {
    return (
        <>
            <section className="contact">
                <div className="container">

                    <div className="grid-container">

                        <div className="grid-item">
                            <div className="icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                            <div className="text">
                                <h3>Visit us</h3>
                                <a href="https://maps.app.goo.gl/qhFmkWcRb2fKbM1j7" target="_blank" rel="noreferrer">
                                    <p>Sveavägen 31</p>
                                    <p>111 34 Stockholm</p>
                                </a>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon"><i className="fa-solid fa-phone"></i></div>
                            <div className="text">
                                <h3>Call us</h3>
                                <a href="callto:+46(8)12147050">
                                    <p>+46 (8) 121 470 50</p>
                                </a>
                                <a href="callto:+46(8)12147051">
                                    <p>+46 (8) 121 470 51</p>
                                </a>

                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon"><i className="fa-light fa-envelope"></i></div>
                            <div className="text">
                                <h3>Email us</h3>
                                <a href="mailto:info@crito.com">
                                    <p>info@crito.com</p>
                                </a>
                                <a href="mailto:supporto@crito.com">
                                    <p>support@crito.com</p>
                                </a>
                            </div>
                        </div>

                    </div>
                    
                    <ContactForm />
                                     

                </div>
            </section>

            <ContactMap />  
           
        </>
    )
}

export default ContactInfo