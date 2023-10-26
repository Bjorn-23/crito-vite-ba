import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import ArticlesNews from '@components/ArticlesNews'
import Footer from '@components/Footer'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/News" page="News" />
      <ArticlesNews />
      <Footer />
    </div>

  )
}

export default News