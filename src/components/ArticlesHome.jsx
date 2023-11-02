import React from 'react'

import SectionTitle from '@generics/SectionTitle'
import Button from '@generics/Button'
import FirstThreeArticles from '@generics/FirstThreeArticles'

//This component includes the "FirstThreeArticles" generic which fetches all articles from API then slices the array keeping only the first three, this component renders onto "Home" view.
const ArticlesHome = () => {
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

                <div className="middle grid-container">

                    <FirstThreeArticles />

                </div>

                <div className="bottom">
                    <ol className="slide-dots">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="dot active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" className="dot"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4" className="dot"></li>
                    </ol>
                </div>

            </div>

        </section>
    )
}

export default ArticlesHome