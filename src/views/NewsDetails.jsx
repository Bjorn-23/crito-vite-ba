import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'

import BreadcrumbsSection from '@components/BreadcrumbsSection'
import NewsDetailsArticleFull from '@components/NewsDetailsArticleFull'
import Footer from '@components/Footer'

const NewsDetails = () => {

  const { id } = useParams()

  return (
    <div className="wrapper">
      <Header />
      <BreadcrumbsSection url="/news" page="NewsDetails" />
      <NewsDetailsArticleFull />
      <Footer />
    </div>
  )
}

export default NewsDetails