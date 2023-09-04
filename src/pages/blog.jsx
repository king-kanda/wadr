import React , { useState , useEffect} from 'react'
import {  Link, useParams  } from 'react-router-dom';
import styles from '../styles/blogs.module.scss'
import { Layout , News } from '../components'
import { Image } from 'cloudinary-react';
import { Helmet } from 'react-helmet';

const Blog = () => {

    const { slug } = useParams()
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        fetch(`https://blog.womeninadr.com/wp-json/wp/v2/posts?slug=${slug}`)
        .then(response => response.json())
        .then(data => setBlogs(data));

    }, [slug]);

    

    return (
        <>
            <Helmet>
                <title> {blogs[0].title.rendered}</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
                <meta name="description" content="WADR empowers women in ADR through training, mentorship, and advocacy, promoting ADR as the global dispute resolution choice." />
                
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
                {blogs.length > 0 && (
                    <main className='bg-gray-200'>

                        <section className={`${styles.Image}`}>
                            <Image className={` ${styles.Img1} `} cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689098217/Women_s_Day_Event_1_1_ignoof.jpg" />
                        </section>

                        <section className={`bg-gray-2 p-2 md:p-8 mb-6 `}>
                            <div className='container p-2 md:px-8'>
                                <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 `}>
                                    {/* comtent section */}
                                    <div className={` ${styles.content} bg-white -mt-24 p-8 md:p-16 col-span-2`}>
                                        <h2 className={`  text-purple ${styles.introC} `}>
                                            {blogs[0].title.rendered} <span className="text-yellow ">.</span>
                                        </h2>
                                        {/* date published  */}
                                        <div className={`  text-gray-700 ${styles.date} `}>
                                        <p>
                                            {new Date(blogs[0].date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </p>

                                        </div>
                                        
                                        <div className={` ${styles.content} `}  >
                                            <div dangerouslySetInnerHTML={{ __html: blogs[0].content.rendered }}></div>
                                        </div>
                                    </div>


                                    {/* author section only on desktop */}
                                    <div className={`col-span-1 hidden md:block`}>
                                        <div className={` ${styles.author} `}>
                                            {/* author name  */}
                                            <div className={`  text-gray-700 ${styles.authorName} `}>
                                                {/* <p>By: {blogs[0]._embedded.author[0].name}</p> */}
                                                <p className={` hello `} > Women In ADR <span className='text-yellow'>.</span> </p>
                                            </div>
                                            {/* author image  */}   
                                            <div className={` ${styles.authorImage} `}>
                                                <img src="/person.svg" alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
                )}
                <News/>
            </Layout>
        </>
    )
}

export default Blog