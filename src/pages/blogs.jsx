import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
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
    <Helmet>
        <title>Explore Our Latest ADR Blogs: Insights, News, and More</title>
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
    <Navbar/>
    <main>
        <section className={` ${styles.blogSection} bg-purple p-6 md:p-12`}>
            <div className="container p-4 md:p-12 ">
                <div className={` ${styles.title} `}>
                    <h1 className={`text-start text-white my-12 ${styles.heading}`}>
                        News & Blogs
                    </h1>
                </div>
              </div>
        </section>
        <section className={` p-4 md:py-6 md:px-24 bg-gray-2  `}>
            <div className="container p-4 md:p-12 ">
                <div className="md:grid grid-cols-3 gap-12">

                { blogs.length <= 0 ? (<>
                
               <>
                    <p className='text-xl w-full font-bold'>
                        No Blogs have been fetched...
                    </p>
               </>
                
                </>) :  blogs.map((blog) => (
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