import React from 'react'
import { Footer, Navbar, Partners , Accordion, News} from '../components'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

import styles from '../styles/home.module.scss'


const Home = () => {
  return (
    <>
        <Navbar/>
        <main>
            <section className={` ${styles.hero} `}>
                <div className="hero-body ">
                  <div className="md:grid grid-cols-3 gap-6">
                    <div className={`col-span-2 p-5 md:p-12 ${styles.heroSub}`}>
                      {/* hero sectio main */}
                      <div className="container py-1 md:py-6">
                        <h1 
                        className={` ${styles.title} text-white  `}>
                        <span className='text-yellow'>Empowering</span>  Women, Elevating the Field of ADR
                        </h1>

                        <p className={ `${styles.text} text-white md:w-2/3  mt-4 md:mt-6 `  }> 
                        WADR is dedicated to paving the way for women from diverse professional and cultural backgrounds to excel in the field of Alternative Dispute Resolution (ADR). We believe that by preparing and positioning women in ADR on both national and international platforms, we can create a more inclusive and dynamic field of dispute resolution
                        </p>
                        {/* div flex buttons around */}
                      
                      </div>
                    </div>
                    <div className={` col-span-1 bg-yellow p-5 md:p-12 ${styles.news} `}>
                      {/* news section */}
                    </div>
                  </div>
                </div>
            </section>
            <Partners />
            <section className={` ${styles.aboutSec} bg-gray-1 `}>
              <div className="container px-16 py-12">
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
                        <a href="/about" className='text-purple underline underline-offset-8 font-bold inline-flex items-center'>Learn More 
                          <span className="px-3">
                            <MdKeyboardDoubleArrowRight/>
                          </span>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={` p-12 container ${styles.accordion} `}>
                <div className="grid grid-cols-2 gap-5">
                    <div className={`intro p-6  `}>
                        <p className='font-bold underline underline-offset-8'> Key Pillars & Drivers : </p>
                        <h2 className={` ${styles.Sctitle} text-purple w-4/5`}>
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
        <Footer/>
    </>
  )
}

export default Home