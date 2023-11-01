import React from 'react'
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


ReactDOM.createRoot(document.getElementById('root')).render(

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
 ,
)
