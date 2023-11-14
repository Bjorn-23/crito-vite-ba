import React from 'react'

import Header from '../generics/layout/Header'
import BreadcrumbsSection from '@components/BreadcrumbsSection'
import ContactSection from '@components/ContactSection'
import Footer from '../generics/layout/Footer'


const Contact = () => {
  return (

    <div className="wrapper">
      <Header />
      <BreadcrumbsSection url="/contact" page="Contact" />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact