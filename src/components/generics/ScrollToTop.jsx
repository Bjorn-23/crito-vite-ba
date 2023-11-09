import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

  //Scrolls to to top of page - hidden until window is scrolled down 600px from top
const ScrollToTop = () => {

  const location = useLocation()

    const [position, setPosition] = useState(0)

    useEffect (() => {
      window.addEventListener('scroll', () => {
        setPosition(window.scrollY)
      })
    })  

    const scrollTo = () => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (

    <button onClick={(scrollTo)} className={`btn-scroll-to-top ${position < 600 ? 'hide-btn' : ''}`}><i className="fa-regular fa-arrow-up-long"></i></button>

  )
}

export default ScrollToTop

