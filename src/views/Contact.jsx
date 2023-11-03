import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import Footer from '@components/Footer'
import ContactInfo from '@components/ContactInfo'


const Contact = () => {
  return (

    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/contact" end page="Contact" />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default Contact