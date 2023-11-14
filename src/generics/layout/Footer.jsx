import React from 'react'
import { Link } from 'react-router-dom'

import ScrollToTop from '../../components/generics/ScrollToTop'
import SocialMediaIcons from '../../components/generics/SocialMediaIcons'

import img_FooterLogo from '@assets/img/footer/Logo-cs.svg'
import img_DesignSquiggles from '@assets/img/footer/design-squiggles.svg'


const Footer = () => {

    <ScrollToTop />

    return (
        <footer className="footer">
            <div className="footer-top relative-f-t">
                <div className="top container">
                    <div className="grid-container">
                        <div id="logotype" className="grid-item">

                            <Link to="/" onClick={(ScrollToTop)}><img src={img_FooterLogo} alt="The logotype of Crito Consulting INC" /></Link>

                            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati
                                voluptas voluptates!
                                Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                        </div>

                        <div className="grid-item">
                            <h3 className="white-txt">Company</h3>
                            <div className="grey-text">
                                <p><a href="/">About</a></p>
                                <p><a href="/">Features</a></p>
                                <p><a href="/">Works</a></p>
                                <p><a href="/">Career</a></p>
                            </div>
                        </div>

                        <div className="grid-item">
                            <h3 className="white-txt">Help</h3>
                            <div className="grey-text">
                                <p><a href="/">Customer Support</a></p>
                                <p><a href="/">Delivery Details</a></p>
                                <p><a href="/">Terms & Conditions</a></p>
                                <p><a href="/">Privacy Policy</a></p>
                            </div>
                        </div>

                        <div className="grid-item">
                            <h3 className="white-txt">Resources</h3>
                            <div className="grey-text">
                                <p><a href="/">Free eBooks</a></p>
                                <p><a href="/">Development Tutorial</a></p>
                                <p><a href="/">How to - Blog</a></p>
                                <p><a
                                    href="https://www.youtube.com/watch?time_continue=1&v=9i4UKnADT5E&embeds_referring_euri=https%3A%2F%2Fec.omniway.se%2F&embeds_referring_origin=https%3A%2F%2Fec.omniway.se&source_ve_path=Mjg2NjY&feature=emb_logo">Youtube
                                    Playlist</a></p>
                            </div>
                        </div>

                        <div className="grid-item">
                            <h3 className="white-txt">Link</h3>
                            <div className="grey-text">
                                <p><a href="/">Free eBooks</a></p>
                                <p><a href="/">Development Tutorial</a></p>
                                <p><a href="/">How to - Blog</a></p>
                                <p><a
                                    href="https://www.youtube.com/watch?time_continue=1&v=9i4UKnADT5E&embeds_referring_euri=https%3A%2F%2Fec.omniway.se%2F&embeds_referring_origin=https%3A%2F%2Fec.omniway.se&source_ve_path=Mjg2NjY&feature=emb_logo">Youtube
                                    Playlist</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="design">

                    <img className=" absolute-f-t" src={img_DesignSquiggles} alt="two  wavy lines of grey color intersecting in a pattern" />

                </div>
            </div>

            <div className="container-fluid cf-1"></div>

            <div className="footer-bottom">
                <div className="bottom container relative">

                    <div className="right">
                        <p><SocialMediaIcons linkClass="soc-med-footer" url="https://facebook.com" iconClass="fa-brands fa-facebook" /></p>
                        <p><SocialMediaIcons linkClass="soc-med-footer" url="https://twitter.com"iconClass="fa-brands fa-x-twitter"  /></p>
                        <p><SocialMediaIcons linkClass="soc-med-footer" url="https://instagram.com" iconClass="fa-brands fa-instagram"  /></p>
                        <p><SocialMediaIcons linkClass="soc-med-footer" url="https://linkedin.com" iconClass="fa-brands fa-linkedin"  /></p>
                    </div>
                    <div className="left">
                        <p className="copyright">&copy; 2023 Crito - Consulting Company INC. All Rights Reserved</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer
