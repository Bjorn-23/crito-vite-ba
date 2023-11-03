import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import ArticleNewsAPI from '@components/ArticleNewsAPI'
import Footer from '@components/Footer'


const News = () => {
  return (

    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/News" page="News" />
      <ArticleNewsAPI />
      <Footer />
    </div>
  )
}

export default News