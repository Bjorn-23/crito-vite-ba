import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import Footer from '@components/Footer'
import ContactInfo from '@components/ContactInfo'
import ContactForm from '../components/generics/ContactForm'
import ContactMap from '../components/ContactMap'

const Contact = () => {
  return (
    <div className="wrapper">
    <Header />
    <Breadcrumbs url="/contact" end page="Contact"  />
    <ContactInfo />
    <Footer />
  </div>
  )
}

export default Contact