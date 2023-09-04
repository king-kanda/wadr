import React from 'react'
import { Image } from 'cloudinary-react';
import { teams } from '../data/team.js'
import { Helmet } from 'react-helmet';
import { Footer, Navbar } from '../components'
import styles from '../styles/teams.module.scss'

const Teams = () => {

  

  return (
    <>
    <Helmet>
        <title>Our Team : Meet Our Dedicated Team at Women in ADR</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
        <meta name="description" content="Diverse experts in ADR: Promoting peace, gender equality, and resolving disputes globally." />
        
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
        <div className='navbar'>
          <Navbar/>
        </div>
        <main>
            <section className={` ${styles.hero} `}>
              <div className="hero-body p-4 md:p-12">
              <div className="container py-1 md:py-6">
                <h1 className={` ${styles.title} text-white  `}>Our Team.</h1>


                <div className="md:grid grid-cols-2 gap-6">
                  <div className="text-one">
                    <p className={ `${styles.text} text-white  mt-4 md:mt-6 `  }> 
                    Our Team comprises a dynamic group of professionals dedicated to promoting peaceful resolutions and fostering gender equality within the field of ADR. Talented women from various backgrounds and expertise, united by a common passion for conflict resolution and social justice. 
                    </p>
                  </div>
                  <div className="text-one">
                    <p className={ `${styles.text} text-white  mt-4 md:mt-6 `  }> 
                    Our team consists of accomplished mediators, Arbitrators, negotiators, and facilitators, who have successfully resolved countless disputes across a wide range of sectors, including commercial, employment, family, community, and international conflicts, with a deep understanding of the complexities and nuances involved in dispute resolution
                    </p>
                  </div>
                </div>
                
                {/* div flex buttons around */}
              
              </div>
              </div>
            </section>
            <section className={` ${styles.team} `}>
                <div className="container p-8 md:p-12">
                      <div className="md:grid grid-cols-4 gap-4">
                      {teams.map((member, index) => (
                    <div 
                    key={index}
                    className={`  keen-slider__slide  ${styles.teamMember} `}>
                        <Image className={` rounded-md ${styles.teamImage} ${styles.numberSlide} `} cloudName="namiri" publicId={member.image} />
                        <div className={` ${styles.teamMemberInfo} py-5`}>
                            <p className='py-2 underline underline-offset-8'>{member.position}</p>
                            <h4 className='text-green py-2'>{member.name}</h4>
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

export default Teams