import React from 'react'

import Header from '../components/Header'
import BreadcrumbsSection from '@components/BreadcrumbsSection'
import ServicesSection from '@components/ServicesSection'
import Footer from '@components/Footer'


const Services = () => {
  return (
    
    <>
      <Header />
      <BreadcrumbsSection url="/services" page="Services" />
      <ServicesSection />
      <Footer />
    </>
  )
}

export default Services