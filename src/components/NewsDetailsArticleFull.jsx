import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useArticles } from '../contexts/ArticlesContext'

import SectionTitle from '../generics/utilities/SectionTitle'
import RecentPost from '../generics/features/RecentPost'
import Button from '../generics/utilities/Button'

import ScrollToArticle from '../generics/utilities/ScrollToArticle'
import MyCarousel from '../generics/utilities/MyCarousel'
import FormatDate from '../generics/utilities//FormatDate'


//This component fetches and article clicked from any other page and with useParams takes the "id" found in the url to fetch the specific articles info. Also includes "FirstThreeArticles" which fetches all articles and slices the array keeping the first 6-8.
const NewsDetailsArticleFull = () => {

    const tags = [
        { class: 't1', url: '#', title: 'Digitalization' },
        { class: 't2', url: '#', title: 'School' },
        { class: 't3', url: '#', title: 'IT' },
        { class: 't4', url: '#', title: 'Design' },
        { class: 't5', url: '#', title: 'Work' },
        { class: 't6', url: '#', title: 'Tech' },
    ]

    const recentPosts = [
        { id: 1, className: 'post-item no-border-top', url: '#', title: 'How To Blow Through Capital At An Incredible Rate', date: 'jan 14, 2019' },
        { id: 2, className: 'post-item', url: '#', title: 'Design Studios That Everyone Should Know About?', date: 'jan 14, 2019' },
        { id: 3, className: 'post-item', url: '#', title: 'How Did We Get 1M+ Visitors In 30 Days Without Anything?', date: 'jan 14, 2019' },
        { id: 4, className: 'post-item', url: '#', title: 'Figma On Figma: How We Built Our Website Design System', date: 'jan 14, 2019' },
    ]

    const categories = [
        { id: 1, url: '#', category: 'Technology', hyphen: '-', postCount: '20', },         
        { id: 2, url: '#', category: 'Freelancing', hyphen: '-', postCount: '07', },
        { id: 3, url: '#', category: 'Writing', hyphen: '-', postCount: '16', },
        { id: 4, url: '#', category: 'Marketing', hyphen: '-', postCount: '11', },
        { id: 5, url: '#', category: 'Business', hyphen: '-', postCount: '35', },
        { id: 6, url: '#', category: 'Education', hyphen: '-', postCount: '14', },
    ]

    const { id } = useParams()
    const { article, getArticle, clearArticle } = useArticles(null)

    useEffect(() => {
        getArticle(id)
        return () => clearArticle
    }, [id])

    useEffect(() => {
        ScrollToArticle()
    }, [id])
        
       
if (!article) {
    return <p>Loading...</p>
}
else
    return (

        <>
            <article className="News-details-articles-full">
                <div className="container grid-container">

                    <div className="top grid-item">
                        <div className="top-left">
                            <div>
                                <SectionTitle title={article.title} />
                            </div>
                            <div className="flex-txt">
                                <p className="date">{FormatDate(article.published).month} {FormatDate(article.published).date}, {FormatDate(article.published).year}</p>
                                <div className="yellow-dot"></div>
                                <p className="category">{article.category}</p>
                                <div className="yellow-dot"></div>
                                <p className="author">{article.author}</p>
                            </div>
                        </div>
                        <div className="top-right"></div>
                    </div>

                    <div className="left grid-item">
                        <img src={article.imageUrl} alt="" />
                        <p className="content">
                            {article.content}
                            <br /><br />
                        </p>
                        <p className="lorem">
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
                            pharetra nonummy
                            pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui
                            purus, scelerisque at,
                            vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed
                            pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
                            viverra imperdiet enim.
                            Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis
                            egestas. Proin pharetra nonummy pede. Mauris et orci.
                            <br /><br />
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at
                            sem venenatis
                            eleifend. Ut nonummy.
                        </p>
                        <blockquote className="a-quote">
                            <p className="quote-icon"><i className="fa-sharp fa-solid fa-quote-right"></i></p>
                            <p className="big-lorem">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                                posuere, magna sed
                                pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            </p>
                        </blockquote>
                        <p className="lorem">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed
                            pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
                            viverra imperdiet enim.
                            Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis
                            egestas.
                        </p>

                        <div className="tags">
                            {
                                tags.map((tags) => <Link key={tags.class} className={'tag ' + (tags.class)} to={tags.url}>{tags.title}</Link>)
                            }
                        </div>
                    </div>

                    <div className="right grid-item">

                        <label htmlFor="aSearchBar" className="search-bar-label visually-hidden-focusable" tabIndex="0">Press to search</label>
                        <form className="search" method="get" action="form-results.html">
                            <input id="aSearchBar" className="search-bar" type="search" name="search?"
                                placeholder="Type to search..." />
                            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                        </form>

                        <div className="recent-posts">
                            <h3><u>Rec</u>ent Posts</h3>
                            {
                                recentPosts.map((recentPosts) => (<RecentPost key={recentPosts.id} className={recentPosts.className} url={recentPosts.url} title={recentPosts.title} date={recentPosts.date} />))
                            }
                        </div>

                        <div className="categories">
                            <h3><u>Cat</u>egories</h3>
                            <div className="cat-container">
                                {
                                    categories.map((categories) => <div key={categories.id} className='cat-item'><Link to={categories.url}>{categories.category}</Link>{categories.hyphen}<p>{(categories.postCount) + ' posts'}</p></div>)
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            <section className="articles-news">
                <div className="container">
                    <div className="top">

                        <div className="top-lft">
                            <SectionTitle title="Get All Of Our Articles & News" orangeText="Articles & News" />
                        </div>

                        <div className="top-rgt">
                            <div className="articles-btn-container">
                                <Button type="transparentFat" title="browse Articles" url="/news" />
                            </div>
                        </div>

                    </div>


                    <MyCarousel />

                </div>
            </section>
        </>
    )
}

export default NewsDetailsArticleFull