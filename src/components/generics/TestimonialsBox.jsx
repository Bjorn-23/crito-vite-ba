import React from 'react'

const TestimonialsBox = ({ img, altText, name, roleComp }) => {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="grid-item">
            <p id="stars" className="stars">
                {
                    stars.map(star => <i key={star} className='fa-sharp fa-solid fa-star' />)
                }
            </p>
            <p className="-grey-txt">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero,
                ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
            </p>
            <div className="flex-wrapper">
                <img src={img} alt={altText} />
                <div>
                    <h3 className="name">{name}</h3>
                    <p className="orange-txt">{roleComp}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsBox