import React from 'react'
import { Layout , EventCards } from '../components'
import { Helmet } from 'react-helmet';
import styles from '../styles/events.module.scss'

const Events = () => {
  return (
    <>
      <Helmet>
          <title>Upcoming ADR Events: Join Us for Knowledge and Networking</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow"/>
          <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
          <meta name="description" content="Elevating members with diverse events: Workshops, conferences, networking for ADR professionals' growth" />
          
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
                <section className={` ${styles.heroSec} bg-gray `}>
                    <div className="container px-14">
                        
                        <h1 className="font-bold ">Calendar.</h1>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="container p-10">
                          <p className="">
                          We take pride in organizing a wide range of events and programs that cater to the professional development and networking needs of our members. From interactive workshops and panel discussions to international conferences and training sessions, our events provide invaluable opportunities for learning, collaboration, and career advancement in the field of ADR.

                          </p>
                        </div>
                    </div>
                </section>
                <section className={` bg-gray p-4 md:py-20 `}>
                    <div className="container p-1 md:px-14">
                      <EventCards/>
                    </div>
                </section>
            </main>
        </Layout>
    </>
  )
}

export default Events;