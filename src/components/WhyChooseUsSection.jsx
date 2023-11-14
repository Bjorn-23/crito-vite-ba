import React from 'react'

import SectionTitle from '../generics/utilities/SectionTitle'
import ChooseUsPointsBox from '../generics/features/ChooseUsPointsBox'

import img_Thumbs from '@assets/img/choose-us/thumbs-up.svg'
import img_Penta from '@assets/img/choose-us/penta.svg'
import img_Design from '@assets/img/choose-us/design.svg'
import img_Ai from '@assets/img/choose-us/ai.svg'
import img_TwoWomen from '@assets/img/choose-us/wmn-meeting.png'

const WhyChooseUsSection = () => {


    return (

        <section className="why-choose-us">
            <div className="container">
                <div className="flex-wrapper">
                    <div className="left-box">
                        <div className="wcu-title-container">
                            <SectionTitle title="Why We Are The Best Business Consulting Agency" orangeText="Why Choose Us" />
                        </div>

                        <div className="wcu-points-container">
                            <ChooseUsPointsBox img={img_Thumbs} altText="a thumbs up" title="Process Excellence" />
                            <ChooseUsPointsBox img={img_Penta} altText="a pentagon" title="Strategic planning" />
                            <ChooseUsPointsBox img={img_Design} altText="a pencil drawing a sketch" title="Experience Design" />
                            <ChooseUsPointsBox img={img_Ai} altText="a cog inside of head, indicating AI" title="Artificial Intelligence" />
                        </div>
                    </div>

                    <div className="right-box">
                        <div className="image-wrapper">
                            <img src={img_TwoWomen}
                                alt="two women having a meeting in a room with one holding a tablet" />
                        </div>
                        <div className="grey-box"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection