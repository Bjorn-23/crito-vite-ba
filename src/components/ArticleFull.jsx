import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import ArticlesBox from '@generics/ArticlesBox'
import SectionTitle from '@generics/SectionTitle'
import RecentPost from './generics/RecentPost'
import Button from '@generics/Button'

import img_25mar from '../assets/img/articles-news/25mar.png'
import img_17mar from '../assets/img/articles-news/17mar.png'
import img_12mar from '../assets/img/articles-news/12mar.png'


const ArticleFull = () => {

    const { id } = useParams()
    const [article, setArticle] = useState(null)


    const getArticle = async () => {
        if (id !== undefined)
        console.log('getArticle() ran')
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
        if (result.status === 200) {
            setArticle(await result.json())
            console.log('result logged')
        }      
    }

    // useEffect(() => {
    //     getArticle()
    //     console.log('article fetched ok')  
    // }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            getArticle()
            console.log('article fetched')
        }, 5000)

        getArticle()
        console.log('article fetched onMount')

        return () => clearInterval(interval)
    }, [])

    console.log(article)


    
    // //use {tags.class} as key value --> t1, t2, t3 etc also sets positioning in grid.
    // const tags = [
    //     { class: 't1', url: '#', title: 'Digitalization' },
    //     { class: 't2', url: '#', title: 'School' },
    //     { class: 't3', url: '#', title: 'IT' },
    //     { class: 't4', url: '#', title: 'Design' },
    //     { class: 't5', url: '#', title: 'Work' },
    //     { class: 't6', url: '#', title: 'Tech' },
    // ]

    // const recentPosts = [
    //     { id: 1, className: 'post-item no-border-top', url: '#', title: 'How To Blow Through Capital At An Incredible Rate', date: 'jan 14, 2019' },
    //     { id: 2, className: 'post-item', url: '#', title: 'Design Studios That Everyone Should Know About?', date: 'jan 14, 2019' },
    //     { id: 3, className: 'post-item', url: '#', title: 'How Did We Get 1M+ Visitors In 30 Days Without Anything?', date: 'jan 14, 2019' },
    //     { id: 4, className: 'post-item', url: '#', title: 'Figma On Figma: How We Built Our Website Design System', date: 'jan 14, 2019' },
    // ]

    // //postCount should be a function of the total amount of posts in that particular category
    // const categories = [
    //     { id: 1, url: '#', category: 'Technology', hyphen: '-', postCount: '20', },
    //     { id: 2, url: '#', category: 'Freelancing', hyphen: '-', postCount: '07', },
    //     { id: 3, url: '#', category: 'Writing', hyphen: '-', postCount: '16', },
    //     { id: 4, url: '#', category: 'Marketing', hyphen: '-', postCount: '11', },
    //     { id: 5, url: '#', category: 'Business', hyphen: '-', postCount: '35', },
    //     { id: 6, url: '#', category: 'Education', hyphen: '-', postCount: '14', },
    // ]



    return (
    
<>


<div>{article.title}</div>
<div>{article.author}</div>
<div>{article.category}</div>
<img src={article.imageUrl} />

{/* 
<article className="articles">
            <div className="container grid-container">

                <div className="top grid-item">
                    <div className="top-left">
                        <div>
                            <h2 className="articles-title">{news.title}</h2> 
                        </div>
                        <div className="flex-txt">
                            <p className="date">{news.published}</p>
                            <div className="yellow-dot"></div>
                            <p className="category">{news.category}</p>
                            <div className="yellow-dot"></div>
                            <p className="author">{news.author}</p>
                        </div>
                    </div>
                    <div className="top-right"></div>
                </div>

                <div className="left grid-item">
                    <img src={news.imageUrl} alt="" />
                    <p className="content">
                        {news.content}
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

                <div className="middle grid-container">

                    <ArticlesBox url="/news" img={img_25mar} altText="a woman in business suite sitting at a table in a classNameroom" date="25" month="Mar" category="Businees" title="How To Use Digitalization In The classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                    libero." />
                    <ArticlesBox url="/news" img={img_17mar} altText="a screen displaying 3 columns: examples, capabilities and limitations" date="25" month="Mar" category="Businees" title="How To Implement Chat GPT In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                    libero." />
                    <ArticlesBox url="/news" img={img_12mar} altText="a smartphone on top of books about css and javascript" date="25" month="Mar" category="Businees" title="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                    libero." />
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
                        */}                  
</>

    )
}

export default ArticleFull