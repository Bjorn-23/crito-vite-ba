import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesBox = () => {
    return (

        <div className="middle grid-container">
            {
                articles.slice(6,9).map((article =>
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

    )
}

export default ArticlesBox