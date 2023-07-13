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
              <div className="hero-body p-5 md:p-12">
              <div className="container py-1 md:py-6">
                <h1 className={` ${styles.title} text-white  `}>Our Team.</h1>

                <p className={ `${styles.text} text-white md:w-2/5 mt-4 md:mt-6 `  }> 
                Our team is comprised of a dynamic and diverse group of legal practitioners, including esteemed judges, accomplished senators, and experienced arbitrators. Together, we are united by our shared passion for advancing the field of Alternative Dispute Resolution (ADR) and pushing the boundaries to achieve WADR's mission.
                </p>
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
                            <p className='text-gray-5 py-2 underline underline-offset-8'>{member.position}</p>
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