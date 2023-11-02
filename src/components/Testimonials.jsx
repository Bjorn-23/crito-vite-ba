import React from 'react'

import SectionTitle from '@generics/SectionTitle'
import TestimonialsBox from '@generics/TestimonialsBox'
import Button from '@generics/Button'

import img_C from '@assets/img/testimonials/c-warren.png'
import img_A from '@assets/img/testimonials/a-tulling.png'
import img_J from '@assets/img/testimonials/j-mcdogglas.png'

const Testimonials = () => {
    return (
        <section className="testimonials">

            <div id="testimonials-content" className="container">

                <div className="test-top-wrapper">
                    <div>
                        <SectionTitle title='What Our Clients Say' orangeText='Testimonials' />
                    </div>
                </div>

                <div className="test-grid-container">

                    <TestimonialsBox img={img_C} altText='Cassandra Warren' name='Cassandra Warren' roleComp='Business manager, Dorfus' />
                    <TestimonialsBox img={img_A} altText='Amanda Tulling' name='Amanda Tulling' roleComp='Senior Developer, Square' />
                    <TestimonialsBox img={img_J} altText='Jack McDogglas' name='Jack McDogglas' roleComp='Key Account Manager, Gobona' />

                </div>

                <div className="btn-black-div">
                    <Button type='black' title='All Reviews' url='#' />
                </div>

            </div>

        </section>

    )
}

export default Testimonials