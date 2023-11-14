import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


import Home from '@views/Home'
import Services from '@views/Services'
import News from '@views/News'
import NewsDetails from '@views/NewsDetails'
import Contact from '@views/Contact'
import NotFound from '@views/NotFound'
import TestPage from '@views/TestPage'
import AutoScrollToTop from './generics/utilities/AutoScrollToTop'
import ScrollToTop from './generics/utilities/ScrollToTop'
import { ArticlesProvider } from './contexts/ArticlesContext'


ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AutoScrollToTop />
      <ScrollToTop />
      <ArticlesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/testpage" element={<TestPage />} />
          </Routes>
      </ArticlesProvider>
    </BrowserRouter>
  </StrictMode>
  ,

)