import React from 'react'

const FeaturesBox = ({CName, img, title, text, alt}) => {
  return (
    <div className={CName} >
        <img className="features-img" src={img} alt={alt} />
        <h3 className="features-h3">{title}</h3>
        <p className="features-text">{text}</p>
        <div className="star1"><i className="fa-duotone fa-plus"></i></div>
        <div className="star2"><i className="fa-duotone fa-plus"></i></div>
        <div className="star3"><i className="fa-duotone fa-plus"></i></div>
    </div>
  )
}

export default FeaturesBox