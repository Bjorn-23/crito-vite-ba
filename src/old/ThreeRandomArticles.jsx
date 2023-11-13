import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns' //use with all that say 789
import { useArticles } from '../contexts/ArticlesContext'

import ScrollToArticle from '@generics/ScrollToArticle' //used as onClick event on Link element


const ThreeRandomArticles = () => {
  
    //----Fetching API-----
    const { articles } = useArticles()//---articles = the fetched value from API - derived from ArticlesContext.jsx
    const [first, setFirst] = useState(null)//---first = slices the news array and returns 3 numbers to display.
    const { id } = useParams()
    const  [activeDot, setActiveDot] = useState(null)


    useEffect(() => { //---Runs function createFirst when news is set
        if (articles)
            createFirst()
    }, [articles, id])
  
    const createFirst = () => { //changes useState of first to a random .slice of the news array
        function createRandomSequentialSequence(arr) {
            const startIndex = Math.floor(Math.random() * (arr.length - 2)); // Generate a random starting index
            return arr.slice(startIndex, startIndex + 3); // Get the sequential sequence of 3 numbers
        }
        const randomSequence = createRandomSequentialSequence(articles);
        setFirst(randomSequence)
        // setFirst(news.slice(5, 8)) //<----- currently not in use!!!
    }

    const handleDotClick = (buttonIndex) => { //Changes dotActive which toggles active class on the dots under articles
         if (activeDot === buttonIndex) {
            setActiveDot(null)
        } else {
            setActiveDot(buttonIndex)
            createFirst()
        }
    }

    //use with all that say 789
    const formatDate = (isoDate) => {  //---changes the ISOvalue from news.published to month written in letters ie 'OCT' and date written in numbers ie '24'. 
        const parsedDate = parseISO(isoDate)
        const month = format(parsedDate, 'MMM')
        const date = format(parsedDate, 'dd')
        return { month, date }
    }
    
    if (!articles) {
        return (<p>Loading...</p>)
    }
    else if (articles && !first) {
        createFirst()
        return (<p>Still Loading...</p>)
    }
    else //---only returns jsx if news and first are created.
        return (
            <>
                <div className="middle grid-container">
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
                </div>

                <div className="bottom">
                    <ol className="slide-dots">
                        <li onClick={() => handleDotClick(0)} className={`dot ${activeDot === 0 ? 'active' : ''}`}></li>
                        <li onClick={() => handleDotClick(1)} className={`dot ${activeDot === 1 ? 'active' : ''}`}></li>
                        <li onClick={() => handleDotClick(2)} className={`dot ${activeDot === 2 ? 'active' : ''}`}></li>
                    </ol>
                </div>
            </>
        )
}

export default ThreeRandomArticles