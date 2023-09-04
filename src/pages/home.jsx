import React, { useState, useEffect } from 'react';
import { Layout , Partners , Accordion, News} from '../components'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Helmet } from 'react-helmet';
import styles from '../styles/home.module.scss'

import { Link } from 'react-router-dom'


const Home = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      // Fetch user data from the API
      fetch('https://blog.womeninadr.com/wp-json/wp/v2/posts?per_page=1&_embed')
      .then(response => response.json())
      .then(data => setBlogs(data));

  }, []);

  return (
    <>
        <Helmet>
            <title>Women in ADR Kenya - Positioning Women in ADR.  </title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
            <meta name="description" content="Empowering women in ADR through training, mentorship, and advocacy for a gender-equal future. Join us in shaping ADR's diversity landscape!" />
            
            {/* <!-- Social Media Meta Tags --> */}
            <meta property="og:title" content="Women in ADR" />
            <meta property="og:description" content="Women in Alternative Dispute Resolution" />
            <meta property="og:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />
            <meta property="og:url" content="https://womeninadr.com/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Women In ADR" />
            <meta name="twitter:description" content="WADR is dedicated to paving the way for women from diverse professional and cultural backgrounds to excel in the field of Alternative Dispute Resolution (ADR). We believe that by preparing and positioning women in ADR on both national and international platforms, we can create a more inclusive and dynamic field of dispute resolution" />
            <meta name="twitter:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />


          
            
            {/* Add more meta tags or other SEO elements as needed */}
        </Helmet>
        <Layout>
            <main>
                <section className={` ${styles.hero} `}>
                    <div className="hero-body ">
                      <div className="md:grid grid-cols-3 gap-6">
                        <div className={`col-span-2 p-3 md:p-12 ${styles.heroSub}`}>
                          {/* hero sectio main */}
                          <div className="container py-2 md:py-6">
                            <h1 
                            className={` ${styles.title} text-white  `}>
                            <span className='text-yellow'>Positioning </span>  Women in ADR .
                            </h1>

                            <p className={ `${styles.text} text-white md:w-3/4  mt-4 md:mt-6 `  }> 
                            Women In ADR (WADR) is dedicated to paving the way for women from diverse professional and cultural backgrounds to excel in the field of Alternative Dispute Resolution (ADR). We believe that by preparing and positioning women in ADR on both national and international platforms, we can create a more inclusive and dynamic field of dispute resolution.
                            </p>
                            {/* div flex buttons around */}
                          
                          </div>
                        </div>
                        <div className={` col-span-1 bg-purple-1 p-5 md:p-12 ${styles.news} hidden md:block `}>
                        
                            <div className={`  ${styles.newsCard} my-5 `}>
                             

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
                                      <div className="exapt-sectiom">
                                          {/* <p className='text-white'>
                                            {blog.excerpt.rendered}
                                          </p> */}
                                          <div className='py-5' dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}></div>
                                      </div>
                                      <div className="news-date flex items-center justify-between py-5">
                                          <div className="category">
                                              <p>
                                                  News
                                              </p>
                                          </div>
                                          <div className="date">
                                              <p className='text-yellow'>
                                                  {new Date(blog.date).toLocaleDateString('en-US')}
                                              </p>
                                          </div>
                                      </div>  
                                  </div>

                                ))}
                                
                             
                            </div>
                            
                        </div>

                      </div>
                    </div>
                </section>
                <Partners />
                <section className={` ${styles.aboutSec} bg-gray-1 `}>
                  <div className="container  p-7 md:px-16 md:py-12">
                    <div className="md:grid grid-cols-2 gap-6">
                      <div className={`col-span-1 ${styles.aboutTt} `}>
                          <h2 className={` text-purple `}>
                          Where women lead, change follows.
                          </h2>
                      </div>
                      <div className={`col-span-1 ${styles.aboutText} `}>
                          <p>
                          Since our inception on November 18th, 2020, Women in Alternative Dispute Resolution (WADR) has been dedicated to empowering and elevating women practitioners in ADR. Our organization provides a platform for women from diverse professional and cultural backgrounds to excel in this field.
                          </p>
                          <p className='mt-3'>
                          At WADR, we believe in the power of continuous growth and excellence. Through cutting-edge training programs, mentorship opportunities, and advocacy initiatives, we equip our members with the tools they need to thrive in the world of ADR. By promoting gender equality and diversity, we contribute to a more inclusive and dynamic field of dispute resolution.


                          </p>
                          <div className="link mt-6">
                            <Link to="/about" className='text-purple underline underline-offset-8 font-bold inline-flex items-center'>Learn More 
                              <span className="px-3">
                                <MdKeyboardDoubleArrowRight/>
                              </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className={` p-6 md:p-12 container ${styles.accordion} `}>
                    <div className="md:grid grid-cols-2 gap-5">
                        <div className={`intro p-6  `}>
                            <p className='font-bold underline underline-offset-8'> Key Pillars & Drivers : </p>
                            <h2 className={` ${styles.Sctitle} text-purple md:w-4/5`}>
                                Driving the Future of ADR.
                            </h2>
                        </div>
                        <div className="accordion py-6 px-3 ">
                            <Accordion/>
                        </div>
                    </div>
                </section>
                <News/>
            </main>
        </Layout>
    </>
  )
}

export default Home ;