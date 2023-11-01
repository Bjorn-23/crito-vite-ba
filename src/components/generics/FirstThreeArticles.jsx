import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const FirstThreeArticles = () => {

    const [articles, setArticles] = useState()
    //   console.log(articles[].id)

    const getArticles = async () => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/`)
        // const data = await result.json()
        // setArticles(data) FÖRENKLAR NER TILL NÄSTA RAD
        if (result.status === 200)
            setArticles(await result.json())
    }

    useEffect(() => {
        getArticles()
        console.log('articles fetched safely')
    }, [])

    const first = articles.slice(0, 3)

    console.log(first)

    if (!first)
        return <p>Loading...</p>
    else
        return (

            <section className="articles-news">
                <div className="container">
                    <div className="middle grid-container">
                        {
                            first.map((article =>
                                <Link key={article.id} className="grid-item" to={`/news/${article.id}`} >
                                    <div className="img-wrapper">
                                        <img className="article-img relative" src={article.imageUrl}
                                            alt="" />
                                        <div className="date-wrapper">
                                            <div className="yellow-square absolute">
                                                <div className="date">{ }</div>
                                                <p className="month">{ }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="subject">{article.subject}</p>
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="lorem">{article.content}</p>
                                </Link>
                            ))
                        }
                    </div>

                </div>

            </section>

        )
}


export default FirstThreeArticles