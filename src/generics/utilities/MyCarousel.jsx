import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useArticles } from '../../contexts/ArticlesContext'

import ScrollToArticle from './ScrollToArticle'
import FormatDate from './FormatDate'
import ArticlesBox from '../features/ArticlesBox'

const MyCarousel = () => {

    const { id } = useParams()
    const { articles } = useArticles()

    const [number, setNumber] = useState(() => { return 1 })
    const intervalRef = useRef(null);
    const [autoplay, setAutoplay] = useState(false)

    const next = () => {
        setNumber((prevNumber) => {
            if (prevNumber >= 3) {
                return 1;
            } else {
                return prevNumber + 1;
            }
        })
    }

    const prev = () => {
        setNumber((prevNumber) => {
            if (prevNumber === 1) {
                return 3;
            } else {
                return prevNumber - 1;
            }
        });
    }

    const prevButton = () => {
        if (autoplay) {
            setAutoplay(!autoplay)
        }
        prev()
    };

    const nextButton = () => {
        if (autoplay) {
            setAutoplay(!autoplay)
        }
        next()
    };

    const onClickPlay = () => {
        setAutoplay(!autoplay)
    }

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setAutoplay(false)
    }, [id])

    useEffect(() => {
        if (autoplay) {
            next()
            intervalRef.current = setInterval(() => {
                next()
            }, 4000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [autoplay]);

    // console.log('auto', autoplay)
    // console.log('interval', intervalRef.current)
    // console.log(number)   

    if (!articles) {
        return (<p>Loading...</p>)
    }
    else
        return (
            <section aria-label='articles'>
                <div className="carousel container" data-carousel>
                    <button className="carousel-button prev" onClick={prevButton}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="carousel-button auto-play" onClick={onClickPlay}><i className="fa-solid fa-play-pause"></i></button>
                    <button className="carousel-button next" onClick={nextButton}><i className="fa-solid fa-arrow-right"></i></button>
                    <ul data-slides>
                        <li className={number === 1 ? "slide active" : "slide"} data-active>
                            <div className="middle grid-container">
                                {
                                    articles.slice(0, 3).map((article, index) =>
                                        <ArticlesBox key={index} to={`/news/${article.id}`} onclick={(ScrollToArticle)} img={article.imageUrl} date={FormatDate(article.published).date} month={FormatDate(article.published).month} subject={article.subject} title={article.title} content={article.content} />
                                    )
                                }
                            </div>
                        </li>
                        <li className={number === 2 ? "slide active" : "slide"}>
                            <div className="middle grid-container">
                                {
                                    articles.slice(3, 6).map((article, index) =>
                                        <ArticlesBox key={index} to={`/news/${article.id}`} onclick={(ScrollToArticle)} img={article.imageUrl} date={FormatDate(article.published).date} month={FormatDate(article.published).month} subject={article.subject} title={article.title} content={article.content} />
                                    )
                                }
                            </div>
                        </li>
                        <li className={number === 3 ? "slide active" : "slide"}>
                            <div className="middle grid-container">
                                {
                                    articles.slice(6, 9).map((article, index) =>
                                        <ArticlesBox key={index} to={`/news/${article.id}`} onclick={(ScrollToArticle)} img={article.imageUrl} date={FormatDate(article.published).date} month={FormatDate(article.published).month} subject={article.subject} title={article.title} content={article.content} />
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )

}

export default MyCarousel