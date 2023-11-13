import React from 'react'

import SectionTitle from '@generics/SectionTitle'
import Button from '@generics/Button'
import MyCarousel from '../components/generics/MyCarousel'

const ArticlesSection = () => {
    return (
        <section className="articles-news">
            <div className="container">
                <div className="top">

                    <div className="top-lft">
                        <SectionTitle title="Get All Of Our Articles & News" orangeText="Articles & News" />
                    </div>

                    <div className="top-rgt">
                        <div className="articles-btn-container">
                            <Button type="transparentFat" title="browse Articles" url="/news" />
                        </div>
                    </div>

                </div>

                <MyCarousel />

            </div>

        </section>
    )
}

export default ArticlesSection