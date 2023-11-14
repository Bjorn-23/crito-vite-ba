import React from 'react'

const TeamBox = ({img, altText, name, role}) => {
  return (
    <div className="img-wrap">
    <img src={img} alt={altText}/>
    <div className="slide-bottom-text">
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
</div>
  )
}

export default TeamBox