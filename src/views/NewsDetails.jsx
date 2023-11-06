import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import ArticleFull from '@components/ArticleFull'
import Footer from '@components/Footer'

const NewsDetails = () => {

  const { id } = useParams()

  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/news" page="NewsDetails" />
      <ArticleFull />
      <Footer />
    </div>
  )
}

export default NewsDetails