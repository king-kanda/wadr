import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react';

import styles from '../styles/blogs.module.scss'
import { Footer, Navbar } from '../components'

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        fetch('https://blog.womeninadr.com/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(data => setBlogs(data));

    }, []);

    

  return (
    <>
    <Navbar/>
    <main>
        <section className={` ${styles.blogSection} bg-purple p-6 md:p-12`}>
            <div className="container p-4 md:p-12 ">
                <div className={` ${styles.title} `}>
                    <h2 className={`text-start text-white my-12 ${styles.heading}`}>
                        News & Blogs
                    </h2>
                </div>
              </div>
        </section>
        <section className={` p-4 md:py-6 md:px-24 bg-gray-2  `}>
            <div className="container p-4 md:p-12 ">
                <div className="md:grid grid-cols-3 gap-12">

                  {blogs.map((blog) => (
                    <div 
                    key={blog.id}
                    className={`  ${styles.newsCard} `}>
                      <div className="card-1 border-t-4 border-yellow py-3">
                
                      {/* <img className={` ${styles.Img1} `} src={blog._embedded["wp:featuredmedia"][0].source_url}  alt={blog.title.rendered} /> */}
                      
                        <div className={` ${styles.Card} mt-6`}>
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
                      </div>
                    </div>

                  ))}  
                 

                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Blog