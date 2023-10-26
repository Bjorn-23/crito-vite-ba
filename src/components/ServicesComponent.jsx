import React from 'react'
import ServiceBox from './generics/ServiceBox'
import SectionTitle from './generics/SectionTitle'

import Button from './generics/Button'
import img_ServiceLines from '../assets/img/services/white-squiggly-lines-services.svg'

const ServicesComponent = () => {
    return (
        <section className="our-services">

            <div className="design-lines-services">
                <img src={img_ServiceLines} alt="" />
            </div>

            <div className="container">

                <div className="c-top">
                    <div className="top-wrapper">
                        <SectionTitle title="We Provide The Best Service For Consulting" orangeText="Our Services" />
                    </div>

                    <div className="spacer-rgt"></div>
                </div>

                <div className="c-middle">
                    <div className="grid-container">

                        <ServiceBox title="Business Advice" url="/services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Startup Business" url="/services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Financial Advice" url="/services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Risk Management" url="/services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        
                    </div>

                    <div className="c-btm">
                        <Button type="transparent-fat" title="Browse Services" url="/services" />
                    </div>

                </div>
            </div>       

        </section>
    )
}

export default ServicesComponent