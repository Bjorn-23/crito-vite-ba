import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsBox = ({img, altText, url, title}) => {
  return (
        <Link className="grid-item-p br" to={url}>
            <img src={img} alt={altText} />
            <h3>{title}</h3>
            <div className="txt-arw">
                <span>Learn More </span>
                <i className="fa-regular fa-arrow-up-right"></i>
            </div>
        </Link>
    )
}

export default ProjectsBox