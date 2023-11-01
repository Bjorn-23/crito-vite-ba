import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './generics/SectionTitle'




const ArticleNewsAPI = () => {

      const [articles, setArticles] = useState([])
    //   console.log(articles[0].id)

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        // const data = await result.json()
        // setArticles(data) FÖRENKLAR NER TILL NÄSTA RAD
        if( result.status === 200 )
        setArticles(await result.json())
    }

    useEffect(() => {
        getArticles()
        console.log('articles fetched safely')
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getArticles()
    //         console.log('articles fetched')
    //     }, 60000)

    //     getArticles()
    //     console.log('articles fetched onMount')

    //     return () => clearInterval(interval)
    // }, [])

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
                
                    {
                    articles.map(article => (
                    <Link key={article.id} className="grid-item" to={`/news/${article.id}`}>
                        <div className="img-wrapper">
                            <img className="article-img relative" src={article.imageUrl}
                                alt='altText' />
                            <div className="date-wrapper">
                                <div className="yellow-square absolute">   
                                <div className="date">123</div>           
                                <p className="month">Mar</p>           
                                    {/* <div className="date">{output.split(" ")[0]}</div>
                                    <p className="month">{output.split(" ")[1]}</p> */}
                                </div>
                            </div>
                        </div>
                            <p className="subject">{article.category}</p>
                            <h3 className="article-title">{article.title}</h3>
                            <p className="lorem">{article.content}</p>
                    </Link>
                    ))
                    }

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