import React from 'react'

import Header from '../components/Header'

import BreadcrumbsSection from '@components/BreadcrumbsSection'
import Footer from '@components/Footer'
import ContactContainer from '@components/ContactContainer'


const Contact = () => {
  return (

    <div className="wrapper">
      <Header />
      <BreadcrumbsSection url="/contact" page="Contact" />
      <ContactContainer />
      <Footer />
    </div>
  )
}

export default Contact