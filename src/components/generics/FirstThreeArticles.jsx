import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ScrollToArticle from '@generics/ScrollToArticle'


const FirstThreeArticles = () => {
    
    <ScrollToArticle />

    //----Fetching API-----
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
        setFirst(news.slice(5, 8))
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
                    <>
                        {
                            first.map((article =>
                                <Link key={article.id} className="grid-item" to={`/news/${article.id}`} onClick={(ScrollToArticle)}> 
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
                    </> 
        )
}

export default FirstThreeArticles