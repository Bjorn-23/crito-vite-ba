import React from 'react'


import Header from '@components/Header'
import Showcase from '@components/Showcase'
import Clients from '@components/Clients'
import Features from '@components/Features'
import AboutCompany from '@components/AboutCompany'
import ServicesComponent from '@components/ServicesComponent'
import WhyChooseUs from '@components/WhyChooseUs'
import Projects from '@components/Projects'
import Team from '@components/Team'
import Testimonials from '@components/Testimonials'
import Subscribe from '@components/Subscribe'
import Footer from '@components/Footer'
import ArticlesHome from '../components/ArticlesHome'




const Home = () => {

  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Clients />
      <Features />
      <AboutCompany />
      <ServicesComponent />
      <WhyChooseUs />
      <Projects />
      <Team />
      <Testimonials />
      <ArticlesHome />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home