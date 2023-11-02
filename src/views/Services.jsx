import React from 'react'

import Header from '@components/Header'
import Breadcrumbs from '@components/Breadcrumbs'
import ServicesComponent from '@components/ServicesComponent'
import Footer from '@components/Footer'

const Services = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/services" end page="Services" />
      <ServicesComponent />
      <Footer />
    </div>
  )
}

export default Services