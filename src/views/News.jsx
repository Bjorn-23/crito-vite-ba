import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
// import ArticlesNews from '@components/ArticlesNews'
import ArticleNewsAPI from '../components/ArticleNewsAPI'
import Footer from '@components/Footer'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/News" page="News" />
      {/* <ArticlesNews /> */}
      <ArticleNewsAPI />
      <Footer />
    </div>

  )
}

export default News