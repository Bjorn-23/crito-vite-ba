import React from 'react'

import SectionTitle from '../generics/utilities/SectionTitle'
import Button from '../generics/utilities/Button'
import MyCarousel from '../generics/utilities/MyCarousel'

const ArticlesNewsSection = () => {
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

export default ArticlesNewsSection