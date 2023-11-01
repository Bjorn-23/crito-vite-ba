import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from '@generics/SectionTitle'
import Button from '@generics/Button'
// import ArticlesBox from '../components/generics/ArticlesBox'


// import img_25mar from '@assets/img/articles-news/25mar.png'
// import img_17mar from '@assets/img/articles-news/17mar.png'
// import img_12mar from '@assets/img/articles-news/12mar.png'


const ArticlesHome = () => {

    const [news, setNews] = useState(null)
    const [first, setFirst] = useState(null)
    
    useEffect(() => {
        console.log('onMount')
        getNews()
    }, [])


    const getNews = async () => {
        console.log('getNews init')
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/`)
        if (result.status === 200) {
            setNews(await result.json())
            console.log('getNews done')
        }
    }

console.log(news)



function createFirst() {
    console.log('create first')
    setFirst(news.slice(0, 3))
    console.log('first created')
}


console.log(first)

if (!news) {
    return (<p>Loading...</p>)
}
else if (news && !first) {
    createFirst()
    return (<p>Still Loading...</p>)
}
else
    return (
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
                    {
                        first.map((article =>
                            <Link key={article.id} className="grid-item" to={`/news/${article.id}`} >
                                <div className="img-wrapper">
                                    <img className="article-img relative" src={article.imageUrl}
                                        alt="" />
                                    <div className="date-wrapper">
                                        <div className="yellow-square absolute">
                                            <div className="date">17</div>
                                            <p className="month">Oct</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="subject">{article.subject}</p>
                                <h3 className="article-title">{article.title}</h3>
                                <p className="lorem">{article.content}</p>
                            </Link>
                        ))
                    } 
                  {/* <ArticlesBox url="/news" img={img_25mar} altText="a woman in business suite sitting at a table in a classNameroom" date="25" month="Mar" category="Businees" title="How To Use Digitalization In The classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                  <ArticlesBox url="/news" img={img_17mar} altText="a screen displaying 3 columns: examples, capabilities and limitations" date="25" month="Mar" category="Businees" title="How To Implement Chat GPT In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." />
                  <ArticlesBox url="/news" img={img_12mar} altText="a smartphone on top of books about css and javascript" date="25" month="Mar" category="Businees" title="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                            libero." /> */}
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