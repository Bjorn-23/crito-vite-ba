import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
  return (

    <Link className="grid-item" to={url}>
        <div className="box-line">_______</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
    </Link>
  )
}

export default ServiceBox