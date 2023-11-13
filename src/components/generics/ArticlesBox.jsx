import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesBox = ({index, to, onclick, img, date, month, subject, title, content}) => {

    return (
        <Link key={index} className="grid-item" to={to} onClick={onclick}>
            <div className="img-wrapper">
                <img className="article-img relative" src={img}
                    alt="" />
                <div className="date-wrapper">
                    <div className="yellow-square absolute">
                        <div className="date">{date}</div>
                        <p className="month">{month}</p>
                    </div>
                </div>
            </div>
            <p className="subject">{subject}</p>
            <h3 className="article-title">{title}</h3>
            <p className="lorem">{content}</p>
        </Link>
    )
}

export default ArticlesBox