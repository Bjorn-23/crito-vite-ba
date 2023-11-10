import React from 'react'

import SectionTitle from '@generics/SectionTitle'
import Button from '@generics/Button'
// import ThreeRandomArticles from '@generics/ThreeRandomArticles'
import MyCarousel from './Carousel/MyCarousel'

//This component includes the "FirstThreeArticles" generic which fetches all articles from API then slices the array keeping only the first three, this component renders onto "Home" view.
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

                {/* <ThreeRandomArticles /> */}
                <MyCarousel />

            </div>

        </section>
    )
}

export default ArticlesSection