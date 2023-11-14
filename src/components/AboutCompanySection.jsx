import React from 'react'

import SectionTitle from '../generics/utilities/SectionTitle'
import Button from '../generics/utilities/Button'

import img_SamB from '@assets/img/company-intro/sam-b.png'
import img_SquigglyLines from '@assets/img/company-intro/white-squiggly-lines-sam-b.svg'



const AboutCompanySection = () => {
    return (
        <section className="about-company">
            <div className="container">
                
                <div className="sam-b-wrapper"><img src={img_SamB}
                    alt="Samantha Brown, Crito's founder" />

                    <div className="blue-hover-wrapper">
                        <div className="blue-hover-box">
                            <div className="bh-inline-txt">
                                <h3>Samantha Brown,</h3>
                                <p className="orange-txt">Founder</p>
                            </div>
                            <div className="bh-lorem">
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</p>
                            </div>
                        </div>
                    </div>

                    <img src={img_SquigglyLines} alt="" className="white-squiggles-sam-b" />

                </div>

                <div className="about-company">

                    <SectionTitle title="We are Business Consulting & Credit Repair Experts" orangeText="About Our Company" />

                    <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas
                        assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p className="lorem btm-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi
                        incidunt adipisci accusantium libero provident voluptate amet.</p>

                    <div className="ci-buttons">

                        <Button type="black" title="Learn More" url="/services" />
                        <div>
                            <a href="https://www.youtube.com/watch?v=XBM4HES9aAY&t=1s" className="btn-video" target="_blank" rel="noreferrer"><i
                                className="fa-sharp fa-solid fa-play"></i></a>
                            <p>Intro video</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutCompanySection