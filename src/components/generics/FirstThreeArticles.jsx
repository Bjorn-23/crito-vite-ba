import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

import ScrollToArticle from '@generics/ScrollToArticle'



const FirstThreeArticles = () => {

    <ScrollToArticle />

    //----Fetching API-----
    const [news, setNews] = useState(null) //---news = the fetched value from API
    const [first, setFirst] = useState(null)//---first = slices the news array and returns 3 numbers to display.
    const { id } = useParams()

    useEffect(() => { 
        getNews()
    }, [])//---Runs function getNews onMount

    useEffect(() => {
        if (news)
        createFirst()
    }, [news, id])//---Runs function createFirst when news is set

    const getNews = async () => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/`)
        if (result.status === 200) {
            setNews(await result.json())
        }
    }//---fetches the information from API

    function createFirst() {
        function createRandomSequentialSequence(arr) {
            const startIndex = Math.floor(Math.random() * (arr.length - 2)); // Generate a random starting index
            return arr.slice(startIndex, startIndex + 3); // Get the sequential sequence of 3 numbers
          }
          const randomSequence = createRandomSequentialSequence(news);
          setFirst(randomSequence)
        
        // setFirst(news.slice(5, 8))
    }//changes useState if first to a slice of the news array

    const formatDate = (isoDate) => {
        const parsedDate = parseISO(isoDate)
        const month = format(parsedDate, 'MMM')
        const date = format(parsedDate, 'dd')
        return { month, date }
    }//---changes the ISOvalue from news.published to month written in letters ie 'OCT' and date written in numbers ie '24'. 

    if (!news) {
        return (<p>Loading...</p>)
    }
    else if (news && !first) {
        createFirst()
        return (<p>Still Loading...</p>)
    }
    else //---only returns jsx if news and first are created.
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
                                        <div className="date">{formatDate(article.published).date}</div>
                                        <p className="month">{formatDate(article.published).month}</p>
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