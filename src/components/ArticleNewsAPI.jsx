import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import SectionTitle from '@generics/SectionTitle';

const ArticleNewsAPI = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const formatDate = (isoDate) => {
    const parsedDate = parseISO(isoDate);
    const month = format(parsedDate, 'MMM');
    const date = format(parsedDate, 'dd');
    return { month, date };
  };

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
    if (result.status === 200) {
      setArticles(await result.json());
    }
  };

  return (
    <section className="articles-news">
            <div className="container">
                <div className="top">

                    <div className="top-lft">
                        <SectionTitle title="Our News & Articles" orangeText="" />
                    </div>

                    <div className="top-rgt">
                        <div className="articles-btn-container">
                            {/* <Button type="transparentFat" title="Browse Articles" url="/news" /> */}
                        </div>
                    </div>

                </div>

                <div className="middle grid-container">

                {articles &&
          articles.map((article) => (
            <Link key={article.id} className="grid-item" to={`/news/${article.id}?scrollTarget=500`}>
              <div className="img-wrapper">
                <img className="article-img relative" src={article.imageUrl} alt="altText" />
                <div className="date-wrapper">
                  <div className="yellow-square absolute">
                    <div className="date">{formatDate(article.published).date}</div>
                    <p className="month">{formatDate(article.published).month}</p>
                  </div>
                </div>
              </div>
              <p className="subject">{article.category}</p>
              <h3 className="article-title">{article.title}</h3>
              <p className="lorem">{article.content}</p>
            </Link>
          ))}

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

export default ArticleNewsAPI
