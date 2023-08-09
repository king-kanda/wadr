import React from 'react'
import { Image } from 'cloudinary-react';
import { teams } from '../data/team.js'

import { Footer, Navbar } from '../components'
import styles from '../styles/teams.module.scss'

const Teams = () => {

  

  return (
    <>
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