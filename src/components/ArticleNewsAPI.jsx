import React, { useEffect, useState } from 'react'
//import ArticlesBox from './generics/ArticlesBox';
import SectionTitle from './generics/SectionTitle'



const ArticleNewsAPI = () => {

    let firstName = Hans




    return (
        <section className="articles-news">
            <div className="container">
                <div className="top">

                    <div className="top-lft">
                        <SectionTitle title="Our News & Articles" orangeText=""/>
                    </div>

                    <div className="top-rgt">
                        <div className="articles-btn-container">
                            {/* <Button type="transparentFat" title="Browse Articles" url="/news" /> */}
                        </div>
                    </div>

                </div>

                <div className="middle grid-container">
                    
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

export default ArticleNewsAPI