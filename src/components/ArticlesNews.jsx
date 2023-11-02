import React from 'react'
import ArticlesBox from '@generics/ArticlesBox';
import SectionTitle from '@generics/SectionTitle'

import img_25mar from '@assets/img/articles-news/25mar.png'
import img_17mar from '@assets/img/articles-news/17mar.png'
import img_13mar from '@assets/img/articles-news/13mar.png'
import img_12mar from '@assets/img/articles-news/12mar.png'
import img_07mar from '@assets/img/articles-news/07mar.png'
import img_02mar from '@assets/img/articles-news/02mar.png'
import img_Insight from '@assets/img/projects/bottom-rgt.png'
import img_Responsive from '@assets/img/projects/top-rgt.png'
import img_Educate from '@assets/img/projects/bottom-lft.png'

//Currently NOT in use - dependant on "ArticlesBox" to function properly.
const ArticlesNews = () => {
    return (
        <section className="articles-news">
            <div className="container">
                <div className="top">

                    <div className="top-lft">
                        <SectionTitle title="Our News & Articles" orangeText="" />
                    </div>

                    <div className="top-rgt">
                        <div className="articles-btn-container">
                            {/* <Button type="transparentFat" title="Browse Articles" url="/news" /> */}
                        </div>
                    </div>

                </div>

                <div className="middle grid-container">

                    <ArticlesBox url="/newsdetails" img={img_25mar} altText="a woman in business suite sitting at a table in a classroom" date="25" month="Mar" category="Businees" title="How To Use Digitalization In The Classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_17mar} altText="a screen displaying 3 columns: examples, capabilities and limitations" date="17" month="Mar" category="Businees" title="How To Implement Chat GPT In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_13mar} altText="a smartphone on top of books about css and javascript" date="13" month="Mar" category="Businees" title="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_12mar} altText="people sitting in rows taking notes" date="12" month="Mar" category="Businees" title="Why You Need To Implement The Five S's" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_07mar} altText="an office landscape" date="07" month="Mar" category="Businees" title="Get More Ivolved With Your End User" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_02mar} altText="apple dektops sitting on modern wooden desks in a design space" date="02" month="Mar" category="Businees" title="Guided Tour Of The Head Offices In Stockholm" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_Insight} altText="a screen displaying 3 columns: examples, capabilities and limitations" date="28" month="Feb" category="Businees" title="Using Business Intelligence To Get Insights Into Our Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_Responsive} altText="a pair of glasses in front of apple products on a white desk" date="18" month="Feb" category="Businees" title="Apple Has Released New Products. Are They Any Good?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                    <ArticlesBox url="/news" img={img_Educate} altText="a notepad with a pen and a ruler in front of a calculator on a desk" date="11" month="Feb" category="Businees" title="How To Improve Your Team And Get Better Results" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
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

    )
}

export default ArticlesNews