import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesBox = ({url, img, altText, date, month, category, title, text}) => {
    return (

        <Link className="grid-item" to={url}>
            <div className="img-wrapper">
                <img className="article-img relative" src={img}
                    alt={altText} />
                <div className="date-wrapper">
                    <div className="yellow-square absolute">
                        <div className="date">{date}</div>
                        <p className="month">{month}</p>
                    </div>
                </div>
            </div>
            <p className="subject">{category}</p>
            <h3 className="article-title">{title}</h3>
            <p className="lorem">{text}</p>
        </Link>

    )
}

export default ArticlesBox