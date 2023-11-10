import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns' //use with all that say 789
import { useArticles } from '../contexts/ArticlesContext'
import ScrollToArticle from '../components/generics/ScrollToArticle' //used as onClick event on Link element

import Header from '../components/Header'
import Footer from '../components/Footer'



const TestPage = () => {

  const { id } = useParams()
  const { articles } = useArticles()//---articles = the fetched value from API - derived from ArticlesContext.jsx


  const formatDate = (isoDate) => {  //---changes the ISOvalue from news.published to month written in letters ie 'OCT' and date written in numbers ie '24'. 
    const parsedDate = parseISO(isoDate)
    const month = format(parsedDate, 'MMM')
    const date = format(parsedDate, 'dd')
    return { month, date }
  }

  const [number, setNumber] = useState(() => {
    return 1
  })

  const prevButton = () => {
    if (number === 1) {
      setNumber(prevNumber => prevNumber + 2)
      // setNext(null)
      return
    } else {
      setNumber(prevNumber => prevNumber - 1)
      // setNext(null)
      return
    }
    // setNext(false)
  }

  const nextButton = () => {
    if (number >=3) {
    setNumber(prevNumber => prevNumber -2)
    return
    } else{
    setNumber(prevNumber => prevNumber + 1)
    return
  }}

  console.log(number)

  if (!articles) {
    return (<p>Loading...</p>)
  }
  else //---only returns jsx if news and first are created.
    return (
      <section aria-label='articles'>
        <div className="carousel container" data-carousel>
          <button className="carousel-button prev" onClick={prevButton}><i className="fa-solid fa-arrow-left"></i></button>
          <button className="carousel-button next" onClick={nextButton}><i className="fa-solid fa-arrow-right"></i></button>
          <ul data-slides>
            <li className={number === 1 ? "slide active" : "slide"} data-active>
              <div className="middle grid-container">
                {
                  articles.slice(0, 3).map((article =>
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
            </li>
            <li className={number === 2 ? "slide active" : "slide"}>
              <div className="middle grid-container">
                {
                  articles.slice(3, 6).map((article =>
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
            </li>
            <li className={number === 3 ? "slide active" : "slide"}>
              <div className="middle grid-container">
                {
                  articles.slice(6, 9).map((article =>
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
            </li>
          </ul>
        </div>
      </section>
    )

}

export default TestPage
