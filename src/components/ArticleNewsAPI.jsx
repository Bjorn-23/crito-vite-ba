import React, { useEffect, useState } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { parseISO, format } from 'date-fns'

import SectionTitle from '@generics/SectionTitle'


//This component fetches all the articles found in the API and via a map function on line 43 then renders them onto the "News.jsx" view.
const ArticleNewsAPI = () => {

    const [articles, setArticles] = useState(null)
    
    const [convertedDate, setconvertedDate] = useState(false)
    
    useEffect(() => {
        getArticles()
    }, [])

    useEffect(() => {
        console.log('do i work?')
        result()
        console.log(articles)
    }, [articles])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        if (result.status === 200) {
            setArticles(await result.json())
            console.log('articles are set')
        }
    }    

    const result = async () => {
        if (!articles) {
            return
        }
        else {
            const isoDate = articles[0].published //how to get the 'article.published' in here instead of just the string it would create? ('2023-10-17T00:00:00')
            const parsedDate = parseISO(isoDate)
            const formattedDate = format(parsedDate, 'MMM, dd, yyyy')
            let result = formattedDate.split(',')
            console.log(result)
            console.log('where am i?')
            setconvertedDate(result)
        }
    }

    let dateArray = convertedDate; // Get the year from the first element of the array
    let date = dateArray[1]
    let month = dateArray[0]
    
if (!articles) {
    <p>Loading...</p>
}
// else if(!month) {
//     return (<p>Still Loading...</p>)
// }
else
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

                    {
                        articles.map(article => (
                            <Link key={article.id} className="grid-item" to={`/news/${article.id}?scrollTarget=500`}>
                                <div className="img-wrapper">
                                    <img className="article-img relative" src={article.imageUrl}
                                        alt='altText' />
                                    <div className="date-wrapper">
                                        <div className="yellow-square absolute">
                                            <div className="date">{date}</div>
                                            <p className="month">{month}</p>
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