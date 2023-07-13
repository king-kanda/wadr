import React, { useState, useEffect } from 'react';
import styles from '../styles/news.module.scss'
import { Link } from 'react-router-dom'

const News = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        fetch('https://blog.womeninadr.com/wp-json/wp/v2/posts?per_page=4&_embed')
        .then(response => response.json())
        .then(data => setBlogs(data));

    }, []);

  return (
    <>
        <section className={` ${styles.NewSection} bg-gray-2 px-24 py-12`}>
            <div className="container p-12 ">

                <div className="title-sec">
                    <h2 className={`text-start my-12 ${styles.heading}`}>
                        News, Press + Events
                    </h2>

                </div>
                <div className={`  ${styles.newsCard} my-5 `}>
                    <div className="grid grid-cols-4 gap-12">

                      {blogs.map((blog) => (
                        <div 
                        key={blog.id}
                        className="card-1 border-t-2 py-6">
                            <div className="news-tittle">
                                <Link to={`/news-blogs/${blog.slug}`}>
                                    <h3 className='hover:underline hover:underline-offset-8 decoration-yellow '>
                                       {blog.title.rendered}
                                    </h3>
                                </Link>
                            </div>
                            <div className="news-date flex items-center justify-between py-5">
                                <div className="category">
                                    <p>
                                        News
                                    </p>
                                </div>
                                <div className="date">
                                    <p>
                                        {new Date(blog.date).toLocaleDateString('en-US')}
                                    </p>
                                </div>
                            </div>  
                        </div>

                      ))}
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default News