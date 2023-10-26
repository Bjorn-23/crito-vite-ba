import React from 'react'
import ArticlesBox from '@generics/ArticlesBox'
import Button from '@generics/Button'
import SectionTitle from '@generics/SectionTitle'

import img_25mar from '../assets/img/articles-news/25mar.png'
import img_17mar from '../assets/img/articles-news/17mar.png'
import img_12mar from '../assets/img/articles-news/12mar.png'


const ArticlesFull = () => {
    return (
        <>
            <article className="articles">
                    <div className="container grid-container">

                        <div className="top grid-item">
                            <div className="top-left">
                                <div>
                                    <h2 className="articles-title">How To Use Digitalization In The classroom</h2>
                                </div>
                                <div className="flex-txt">
                                    <p>Mar 25, 2023</p>
                                    <div className="yellow-dot"></div>
                                    <p>Business</p>
                                    <div className="yellow-dot"></div>
                                    <p>Kimberley Hansen</p>
                                </div>
                            </div>
                            <div className="top-right"></div>
                        </div>

                        <div className="left grid-item">
                            <img src={img_25mar} alt="" />
                            <p className="lorem">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                                posuere, magna sed
                                pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                <br /><br />
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
                                pharetra nonummy
                                pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui
                                purus, scelerisque at,
                                vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                                posuere, magna sed
                                pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
                                viverra imperdiet enim.
                                Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis
                                egestas. Proin pharetra nonummy pede. Mauris et orci.
                                <br /><br />
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at
                                sem venenatis
                                eleifend. Ut nonummy.
                            </p>
                            <blockquote className="a-quote">
                                <p className="quote-icon"><i className="fa-sharp fa-solid fa-quote-right"></i></p>
                                <p className="big-lorem">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                                    posuere, magna sed
                                    pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                </p>
                            </blockquote>
                            <p className="lorem">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                                posuere, magna sed
                                pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
                                viverra imperdiet enim.
                                Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis
                                egestas.
                            </p>

                            <div className="tags">
                                <div className="tag t1"><a href="#">Digitalization</a></div>
                                <div className="tag t2"><a href="#">School</a></div>
                                <div className="tag t3"><a href="#">IT</a></div>
                                <div className="tag t4"><a href="#">Design</a></div>
                                <div className="tag t5"><a href="#">Work</a></div>
                                <div className="tag t6"><a href="#">Tech</a></div>

                            </div>

                        </div>

                        <div className="right grid-item">

                            <label htmlFor="aSearchBar" className="search-bar-label visually-hidden-focusable" tabIndex="0">Press to search</label>
                            <form className="search" method="get" action="form-results.html">
                                <input id="aSearchBar" className="search-bar" type="search" name="search?"
                                    placeholder="Type to search..." />
                                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </form>

                            <div className="recent-posts">
                                <h3><u>Rec</u>ent Posts</h3>
                                <div className="post-item no-border-top">
                                    <a href="#">How To Blow Through Capital At An Incredible Rate</a>
                                    <p>Jan 14, 2020</p>
                                </div>
                                <div className="post-item">
                                    <a href="#">Design Studios That Everyone Should Know About?</a>
                                    <p>Jan 14, 2020</p>
                                </div>
                                <div className="post-item">
                                    <a href="#">How Did We Get 1M+ Visitors In 30 Days Without Anything?</a>
                                    <p>Jan 14, 2020</p>
                                </div>
                                <div className="post-item">
                                    <a href="#">Figma On Figma: How We Built Our Website Design System</a>
                                    <p>Jan 14, 2020</p>
                                </div>
                            </div>

                            <div className="categories">
                                <h3><u>Cat</u>egories</h3>
                                <div className="cat-container">
                                    <div className="cat-item"><a href="#">Technology</a>-<p>20 posts</p>
                                    </div>
                                    <div className="cat-item"><a href="#">Freelancing</a>-<p>07 posts</p>
                                    </div>
                                    <div className="cat-item"><a href="#">Writing</a>-<p>16 posts</p>
                                    </div>
                                    <div className="cat-item"><a href="#">Marketing</a>-<p>11 posts</p>
                                    </div>
                                    <div className="cat-item"><a href="#">Business</a>-<p>35 posts</p>
                                    </div>
                                    <div className="cat-item"><a href="#">Education</a>-<p>14 posts</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
            </article>


            <section className="articles-news">
                <div className="container">
                    <div className="top">

                        <div className="top-lft">
                            <SectionTitle title="Get All Of Our Articles & News" orangeText="Articles & News"/>
                        </div>

                        <div className="top-rgt">
                            <div className="articles-btn-container">
                                <Button type="transparentFat" title="browse Articles" url="/news" />
                            </div>
                        </div>

                    </div>

                    <div className="middle grid-container">

                        <ArticlesBox url="/news" img={img_25mar} altText="a woman in business suite sitting at a table in a classNameroom" date="25" month="Mar" category="Businees" title="How To Use Digitalization In The classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                                libero." />
                        <ArticlesBox url="/news" img={img_17mar} altText="a screen displaying 3 columns: examples, capabilities and limitations" date="25" month="Mar" category="Businees" title="How To Implement Chat GPT In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                                libero." />
                        <ArticlesBox url="/news" img={img_12mar} altText="a smartphone on top of books about css and javascript" date="25" month="Mar" category="Businees" title="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                                libero." />
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
        </>

    )
}

export default ArticlesFull