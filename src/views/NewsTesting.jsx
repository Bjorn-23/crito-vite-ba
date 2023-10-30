import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import ArticleNewsAPI from '@components/ArticleNewsAPI'
import Footer from '@components/Footer'

const NewsTesting = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/NewsTesting" page="NewsTesting" />
      <ArticleNewsAPI />
      <Footer />
    </div>

  )
}

export default NewsTesting