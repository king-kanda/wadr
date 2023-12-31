import React from 'react'
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout, News, Team } from '../components'
import styles from '../styles/about.module.scss'


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Women in ADR Kenya: Empowering Through Expertise</title>
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
          <main>
              <section className={`  bg-purple py-8`}>
                    <div className={` ${styles.hero} `}>
                    <div className="hero-body container p-5 md:p-24">
                      <div className="border-l-8 border-white p-5 md:px-20 md:py-6">
                        <h1 className={` ${styles.title} text-white  `}>
                        Who Are We?</h1>

                        <p className={ `${styles.text} text-white md:w-4/5 mt-2 md:mt-4 `  }> 
                        <span className='text-yellow font-bold'>Women in Alternative Dispute Resolution (WADR </span>) empowers women in Alternative Dispute Resolution through training, mentorship, and advocacy, establishing ADR as the preferred mechanism for resolving disputes globally.
                        </p>
                        {/* div flex buttons around */}
                      
                      </div>
                    </div>
                    </div>

                    {/*  */}

                    <div className="brief">
                      <div className="container p-6 md:my-4 md:px-24">
                        <div className="md:grid grid-cols-2 gap-6 items-center">
                          <div className={`col-span-1 ${styles.aboutTt} ml-2 md:ml-24`}>
                              <h2 className={` text-purple bg-white py-2 px-6 lg:w-3/5 md:w-5/5 text-center `}>
                                About Us 
                              </h2>
                            <p className={` p-2 mt-6 text-white ${styles.abText}  md:w-3/3 `}>
                              We are committed to empowering women from diverse professional and cultural backgrounds, Women in Alternative Dispute Resolution (WADR) paves the way for excellence in the field of ADR.
                              </p>
                          </div>
                          <div className={`col-span-1 ${styles.aboutText} text-center md:text-end mt-10 md:my-0 md:p-2 `}>
                              <h3 className={` text-white text-xl `}>
                                Want to  <br /> <span className='text-yellow'> Get involved ?</span>
                              </h3>
                              <div className="btn-cont mt-4">
                                  <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScIgSf8A7k9EuwCzFDUcG80XzfvEvXrkcw5qlxZTecOuZ9Z3Q/viewform" >
                                    <button className='border border-white px-6 py-2 text-white font-bold mt-4'>
                                        Join Us
                                    </button>
                                  </a>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>              
              </section>
              <section className={` ${styles.aboutSec} bg-gray-1`}>
                <div className="container p-6 md:py-12 md:px-24">
                  <div className="md:grid grid-cols-2 gap-5 px-4 mt-6 items-center
                  sm:flex-col-reverse
                  ">
                   
                     
                      <div className={` ${styles.abtText} `}>
                          <h2 className='py-8'>
                              About Us
                          </h2>
                         <p className='w-full'>
                            Women in Alternative Dispute Resolution (WADR) a non-profit organization launched on the 18th November 2020. Since it's inception, WADR had been paying way for Women from diverse professional and cultural backgrounds to excel in the field of ADR. Our vision is to empower and elevate women ADR practitioners, enabling them to become accomplished professionals in their fields. 
                            <br />
                            <br />
                            Through relentless dedication and unwavering commitment we strive to deliver ADR as the preferred mechanism for resolving disputes. With our motto, ' Forever Upwards in the journey towards becoming accomplished ADR practitioners while underscoring the objective of delivering ADR as the preferred dispute  resolution mechanism',we embody the spirit of continuous growth and excellence. At WADR we provide a supportive network where ADR practitioners can connect, collaborate, and share their experiences
                         </p>
                         <br />
                        
                      </div>
                      <div className="image-1 border-l-8 border-yellow ">
                        <Image className={` ${styles.Img1}  `} alt="women in adr" cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689783442/Courtesy_Call_at_Njeri_Kariuki_s_zibwp6-min_ydrnkh-min_1_t7zyyl.jpg" />
                      </div>
                  </div>
                </div>
              </section>
              <section className={` ${styles.aboutSec} bg-gray-1`}>
                    <div className="container p-6 md:py-12 md:px-24 ">
                      <div className="md:grid grid-cols-2 gap-5 px-4 mt-6 items-center">
                        <div className="image-section md:grid grid-cols-2 gap-4">
                          <div className="image-1 border-l-2 border-yellow">
                            <Image className={` ${styles.Img1} ${styles.ImgMT} `} alt="women in adr" cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689164635/IDLO_WADR_Workshop_1_sjgn3a.jpg" />
                          </div>
                          <div className="image-1  border-l-2 border-yellow">
                            <Image className={` ${styles.Img1}  `} alt="women in adr" cloudName="namiri" publicId="https://res.cloudinary.com/namiri/image/upload/v1689242712/Africa_Nazarene_Mediation_Moot_svg9tk.jpg" />
                          </div>
                        </div>
                        <div className={` ${styles.textSection} text-end px-3 py-6 md:py-3 hidden md:block`}>
                            <h2>
                              Our Mission,<br /> Vission & Beliefs
                            </h2>

                            <div className="text-start p-3 md:px-12 md:py-6">
                                <h3>
                                  Our Mission
                                </h3>
                                <p>
                                Our mission at Women in Alternative Dispute Resolution (WADR) is to empower and elevate women practitioners in the field of Alternative Dispute Resolution (ADR), providing them with the resources, support, and opportunities needed to excel in their careers.
                                </p>
                            </div>

                            <div className="text-start p-3 md:px-12 md:py-6">
                                <h3>
                                  Our Vission.
                                </h3>
                                <p>
                                Our vision is to shape the future of ADR by establishing it as the preferred and effective means of resolving conflicts worldwide, while promoting gender equality and diversity in the field.
                                </p>
                            </div>

                            <div className="text-start p-3 md:px-12 md:py-6">
                                <h3>
                                Values.
                                </h3>
                                <p>
                                At WADR, we are driven by the values of continuous growth, excellence, collaboration, and inclusivity. We believe in expanding knowledge, honing skills, fostering a supportive network, and contributing to a more inclusive and dynamic field of dispute resolution.
                                </p>
                            </div>


                        </div>
                      </div>
                    </div>
              </section>
              <section className={` ${styles.Team} p-5 md:p-12 mt-6 md:mt-2`}>
                <div className="container">
                  <div className="md:grid grid-cols-3 gap-5 px-3 md:px-6  items-start">
                    <div className="col-span-1 py-8">
                      <h2 className='text-purple text-2xl'>
                        Meet Our Team
                      </h2>
                      <p className='mt-4'>
                        We have a diverse and talented group of professionals who bring their expertise and passion to various areas of our organization. From event planning and program development to mentorship and advocacy, our teams collaborate to create meaningful impact in the field of ADR.

                      </p>
                      <div className="btn-holder mt-7">
                          <Link to="/committee-members">
                              <button className='bg-purple px-6 py-3 text-white'>
                                Meet The Team.
                              </button>
                          </Link>
                      </div>
                    </div>
                    <div className="col-span-2">
                      {/* slider */}
                      <Team/>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-gray-5 my-8"></div>
                </div>
              </section>
              <div className="news-section ">
                <News/>
              </div>
          </main>
      </Layout>
    </>
  )
}

export default About