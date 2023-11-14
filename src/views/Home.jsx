import React from 'react'


import Header from '../generics/layout/Header'
import ShowcaseSection from '@components/ShowcaseSection'
import ClientsSection from '@components/ClientsSection'
import FeaturesSection from '@components/FeaturesSection'
import AboutCompanySection from '@components/AboutCompanySection'
import ServicesSection from '@components/ServicesSection'
import WhyChooseUsSection from '@components/WhyChooseUsSection'
import ProjectsSection from '@components/ProjectsSection'
import TeamSection from '@components/TeamSection'
import TestimonialsSection from '@components/TestimonialsSection'
import ArticlesSection from '../components/ArticlesSection'
import SubscribeSection from '@components/SubscribeSection'
import Footer from '../generics/layout/Footer'


const Home = () => {

  return (

    <>
      <Header />
      <ShowcaseSection />
      <ClientsSection />
      <FeaturesSection />
      <AboutCompanySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <ArticlesSection />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Home