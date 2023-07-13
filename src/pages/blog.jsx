import React , { useState , useEffect} from 'react'
import {  Link, useParams  } from 'react-router-dom';
import styles from '../styles/blogs.module.scss'
import { Footer, Navbar } from '../components'

const Blog = () => {

    const { slug } = useParams()
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        // fetch(`https://blog.womeninadr.com/wp-json/wp/v2/posts?slug=${slug}`)
        fetch(`https://blog.womeninadr.com/wp-json/wp/v2/posts?slug=empowering-women-in-adr-breaking-barriers-and-driving-change`)
        .then(response => response.json())
        .then(data => setBlogs(data));

    }, []);

    console.log(blogs)
    return (
        <>
            <Navbar/>
                <main className='bg-gray-200'>

                    <section className={`${styles.Image}`}>
                        {/* {blogs && blogs[0]._links["wp:featuredmedia"] && (
                            <img src='https://fraciahlaw.com/wp-content/uploads/2022/08/nairobi-kenya-1-scaled-1-1536x768.webp' alt="" />
                        )} */}
                    </section>

                    <section className={`bg-gray-200 p-8 mb-6 `}>
                        <div className='container px-8'>
                            <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 `}>
                                {/* comtent section */}
                                <div className={` ${styles.content} bg-gray-100 -mt-24 p-16 col-span-2`}>
                                    <h2 className={`  text-purple ${styles.introC} `}>
                                        {blogs[0].title.rendered} <span className="text-gold ">.</span>
                                    </h2>
                                    {/* date published  */}
                                    <div className={`  text-gray-700 ${styles.date} `}>
                                    <p>{new Date(blogs[0].date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                                    </div>
                                    
                                    <div className={` ${styles.content} `}  >
                                        <div dangerouslySetInnerHTML={{ __html: blogs[0].content.rendered }}></div>
                                    </div>
                                </div>


                                {/* author section only on desktop */}
                                <div className={`col-span-1`}>
                                    <div className={` ${styles.author} `}>
                                        {/* author name  */}
                                        <div className={`  text-gray-700 ${styles.authorName} `}>
                                            {/* <p>By: {post[0]._embedded.author[0].name}</p> */}
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
            <Footer/>
        </>
    )
}

export default Blog