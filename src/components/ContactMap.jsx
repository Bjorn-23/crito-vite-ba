import React from 'react'

const ContactMap = () => {
    return (
        <section className="map">
            <div className="container-fluid">
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13299.173483270846!2d18.047397112850533!3d59.335248767174505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1sen!2sse!4v1694788672912!5m2!1sen!2sse"
                        width="100%" height="620" style={{ border: '' }} loading="lazy" allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade" title="Hans"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactMap