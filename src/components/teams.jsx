import React from "react"
import { useKeenSlider } from "keen-slider/react"
import { Image } from 'cloudinary-react';
import { teams } from '../data/team.js'

import "keen-slider/keen-slider.min.css"
import styles from '../styles/about.module.scss'

const Teams = () => {

      const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: calculatePerView(),
          spacing: 15,
        },
      })
    
      function calculatePerView() {
        const windowWidth = window.innerWidth
    
        // Adjust the perView value based on the window width
        if (windowWidth >= 1024) {
          return 3
        } else if (windowWidth >= 768) {
          return 3
        } else if (windowWidth >= 480) {
          return 1.5
        } else {
          return 3
        }
      }
   

  return (



    <>
           
           
            {/* slider section */}
            <div ref={sliderRef} className={` mx-8 my-4 container keen-slider`}>
                
                {teams.map((member, index) => (
                    <div 
                    key={index}
                    className={`  keen-slider__slide  ${styles.teamMember} `}>
                        <Image className={` rounded-md ${styles.Teamimage} ${styles.numberSlide} `} cloudName="namiri" publicId={member.image} />
                        <div className={` ${styles.teamMemberInfo} py-5`}>
                            <p className='text-gray-3 py-2'>{member.position}</p>
                            <h4 className='text-green py-2'>{member.name}</h4>
                            
                        </div>
                       
                   </div>
                ))}
              
            </div>
            
            
        
    </>
  )
}

export default Teams