import React from 'react'
import FeaturesBox from './generics/FeaturesBox'
import img_Handshake from '../assets/img/features/handshake.svg'
import img_Lightbulb from '../assets/img/features/lightbulb.svg'
import img_Graph from '../assets/img/features/graph.svg'
import img_Factory from '../assets/img/features/factory.svg'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'

const Features = () => {
  return (
    <section className="features">
        <div id="features-container" className="container">

            <div className="box-left">
                <SectionTitle title="Our Accounting is trusted by thousands of companies" orangeText="Features" />
                <Button type="yellow" url="/Services" title="Learn More" />
            </div>

            <div className="box-right grid-container">
                <FeaturesBox CName="gi1 grid-item" img={img_Handshake} alt="handshake" title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."  />
                <FeaturesBox CName="gi2 grid-item" img={img_Lightbulb} alt="lightbulb" title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox CName="gi3 grid-item" img={img_Graph} alt="graph" title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox CName="gi4 grid-item" img={img_Factory} alt="factory" title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
            </div>

        </div>

    </section>

  )
}

export default Features