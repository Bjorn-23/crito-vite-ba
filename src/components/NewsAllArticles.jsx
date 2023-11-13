import React from 'react'
import { useArticles } from '../contexts/ArticlesContext'

import SectionTitle from '@generics/SectionTitle'
import FormatDate from './generics/FormatDate'
import ArticlesBox from './generics/ArticlesBox'
import ScrollToArticle from './generics/ScrollToArticle'

const NewsAllArticles = () => {
  const { articles } = useArticles()

  if (!articles)
    return (<P>loading...</P>)
  else
    return (
      <section className="articles-news">
        <div className="container">
          <div className="top">

            <div className="top-lft">
              <SectionTitle title="Our News & Articles" orangeText="" />
            </div>

            <div className="top-rgt">
              <div className="articles-btn-container">
              </div>
            </div>

          </div>

          <div className="middle grid-container">

            {
              articles &&
                articles.map((article, index) => 
                  <ArticlesBox key={index} to={`/news/${article.id}`} onclick={(ScrollToArticle)} img={article.imageUrl} date={FormatDate(article.published).date} month={FormatDate(article.published).month} subject={article.subject} title={article.title} content={article.content} />
                )
            }

          </div>

          <div className="bottom">
            <ol className="slide-dots">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="dot active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3" className="dot"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4" className="dot"></li>
            </ol>
          </div>

        </div>

      </section>


    )
}

export default NewsAllArticles