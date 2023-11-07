import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@components/generics/Button'
import Footer from '@components/Footer'

import img_lost from '@assets/img/not-found/lost-1.jpg'


const NotFound = () => {

  const navigate = useNavigate()

  return (
    
    <div className="wrapper">
      <div className="pageNotFound">
        <img src={img_lost} className="imgLost" alt="A confused man looking at a map and wondering where he is" />
        <h1>404 Page Not Found</h1>
        <Link onClick={() => navigate(-1)} className="btn-yellow">Back</Link>
      </div>
      <Footer />

    </div>
  )
}

export default NotFound
