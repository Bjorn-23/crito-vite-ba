import React from 'react'
import { Link } from 'react-router-dom'

const RecentPost = ({className, url, title, date}) => {
    return (
        <div className={className}>
            <Link to={url}>{title}</Link>
            <p>{date}</p>
        </div>
    )
}

export default RecentPost