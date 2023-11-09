import React from 'react'

import Header from '../components/Header'

import BreadcrumbsSection from '@components/BreadcrumbsSection'
import NewsAllArticles from '@components/NewsAllArticles'
import Footer from '@components/Footer'


const News = () => {
  return (

    <div className="wrapper">
      <Header />
      <BreadcrumbsSection url="/News" page="News" />
      <NewsAllArticles />
      <Footer />
    </div>
  )
}

export default News