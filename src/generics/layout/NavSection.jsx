import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Button from '../utilities/Button'
import SocialMediaIcons from '../utilities/SocialMediaIcons'

import img_critoLogo from '@assets/img/header/Logotype.svg'


const NavSection = () => {

    return (

        <div className="header">
            <div className="container">
                <Link to="/"><img className="crito-logo-top" src={img_critoLogo} alt="Crito Logotype" /></Link>

                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="fa-light fa-phone-volume"></i>
                                <a href="callto:+46(8)12147050">+46 (8) 121 470 50</a>
                            </div>
                            <div className="content-box">
                                <i className="fa-light fa-envelope"></i>
                                <a href="mailto:info@crito.com?subject=Hello%20World!&body=All%20your%20base%20are%20belong%20to%20us...">info@crito.com</a>
                            </div>
                            <div className="content-box last">
                                <i className="fa-light fa-location-dot"></i>
                                <Link to="https://maps.app.goo.gl/JUjns7mUxx5Q5QEL8" target="_blank" rel="noreferrer">Sveavägen 31 111 34 Stockholm</Link>

                            </div>
                        </div>
                        <div className="social-media">
                            <SocialMediaIcons url="https://facebook.com" iconClass="fa-brands fa-facebook"  />
                            <SocialMediaIcons url="https://twitter.com"iconClass="fa-brands fa-x-twitter"  />
                            <SocialMediaIcons url="https://instagram.com" iconClass="fa-brands fa-instagram"  />
                            <SocialMediaIcons url="https://linkedin.com" iconClass="fa-brands fa-linkedin"  />
                        </div>
                    </div>

                    <div className="main-menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>

                        <Button type="yellow" title="Login" url="/login" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavSection