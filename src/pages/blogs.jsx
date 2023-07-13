import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react';

import styles from '../styles/blogs.module.scss'
import { Footer, Navbar } from '../components'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <main>
        <section className={` ${styles.blogSection} bg-purple px-12 py-12`}>
            <div className="container p-12 ">
                <div className={` ${styles.title} `}>
                    <h2 className={`text-start text-white my-12 ${styles.heading}`}>
                        News & Blogs .
                    </h2>
                </div>
              </div>
        </section>
        <section className={` py-6 px-24 bg-gray-2  `}>
            <div className="container p-12 ">
                <div className="grid grid-cols-4 gap-12">

                  <div className={`  ${styles.newsCard} `}>
                      <div className="card-1 border-t-4 border-yellow py-3">
                      <Image className={` ${styles.Img1} `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689164635/IDLO_WADR_Workshop_1_sjgn3a.jpg" />
                        <div className={` ${styles.Card} mt-6`}>
                            <div className="news-tittle">
                                <Link to="#">
                                    <h3 className='hover:underline hover:underline-offset-8 decoration-yellow '>
                                      WFN at Women Deliver 2023.
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
                                    <p className='font-bold'>
                                        JULY 11, 2023
                                    </p>
                                </div>
                            </div> 
                        </div>    
                      </div>
                  </div>

                  <div className={`  ${styles.newsCard} `}>
                      <div className="card-1 border-t-4 border-yellow py-3">
                      <Image className={` ${styles.Img1} `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689164635/IDLO_WADR_Workshop_1_sjgn3a.jpg" />
                        <div className={` ${styles.Card} mt-6`}>
                            <div className="news-tittle">
                                <Link to="#">
                                    <h3 className='hover:underline hover:underline-offset-8 decoration-yellow '>
                                      WFN at Women Deliver 2023.
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
                                    <p className='font-bold'>
                                        JULY 11, 2023
                                    </p>
                                </div>
                            </div> 
                        </div>    
                      </div>
                  </div>

                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Blog