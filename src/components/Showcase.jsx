import React from 'react'

import Button from '@generics/Button'

import img_manInSuit from '@assets/img/showcase/man-in-suit.png'
import img_showcaseLines from '@assets/img/showcase/showcase-squiggle.svg'


const Showcase = () => {
  return (

    <section className="showcase">

      <img className="showcase-lines" src={img_showcaseLines} alt="" />


      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes</p>
          <Button type="yellow" title="Get Consulting" url="/contact" />
          <Button type="transparent" title="Learn More" url="/services" />

        </div>
        <img src={img_manInSuit} alt="a man in a suit with a tablet" />
      </div>


    </section>

  )
}

export default Showcase