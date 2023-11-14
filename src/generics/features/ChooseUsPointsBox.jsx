import React from 'react'

const ChooseUsPointsBox = ({img, altText, title}) => {
  return (
    <div className="points">
        <div className="img-div">
            <img src={img} alt={altText} />
        </div>
        <div className="txt-div">
            <h3>{title}</h3>
            <p>"Lorem, ipsum dolor sit amet consectetur."</p>
        </div>
    </div>
  )
}

export default ChooseUsPointsBox