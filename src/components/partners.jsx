import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { useKeenSlider } from "keen-slider/react"


import "keen-slider/keen-slider.min.css"
import styles from '../styles/home.module.scss';

const Partners = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  function calculatePerView() {
    const windowWidth = window.innerWidth

    // Adjust the perView value based on the window width
    if (windowWidth >= 1024) {
      return 5
    } else if (windowWidth >= 768) {
      return 3
    } else if (windowWidth >= 480) {
      return 2
    } else {
      return 3.5
    }
  }

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: calculatePerView(),
      spacing: 15,
    },
  })

  

  const affiliatePartners = [
    {
        name: 'Nairobi Center for International Arbitration (NCIA)',
        logo: 'https://res.cloudinary.com/namiri/image/upload/v1689116117/NCIA-Logo-2022_vs03vz.png',
        intro: 'AFC provides financial services and support to farmers, enabling them to invest in sustainable agricultural practices and improve their livelihoods, aligning with our mission to promote inclusive and prosperous agriculture.'
    },
    {
        name: 'Chartered Institute of Arbitrators, Kenya Branch',
        logo: 'https://res.cloudinary.com/namiri/image/upload/v1689115822/CIArb_Logo_enpk5z.jpg',
        intro: "KALRO's agricultural research and technical assistance contribute to our mission by providing valuable insights and knowledge on sustainable farming techniques, empowering farmers to enhance productivity and adopt innovative practices."
    },
    {
        name:'International Development Law Organization (IDLO)',
        logo : 'https://res.cloudinary.com/namiri/image/upload/v1689115839/IDLO_Logotype_Blue_Portrait_transparent_h8gmhe.png',
        intro : 'Through financial services, training, and market access, Equity Group Foundation supports our mission of empowering smallholder farmers and promoting their economic resilience within the agricultural sector.'
    },
    {
        name : 'Amani Communities Africa',
        logo : 'https://res.cloudinary.com/namiri/image/upload/v1689115946/AMANI-COMMUNITY_z446vc.png' ,
        intro : " FAO's technical expertise and assistance contribute to our mission by providing access to knowledge resources, research findings, and best practices in sustainable agriculture and food security."
    },
    // {
    //     name : 'African Nazarene University',
    //     logo : 'https://res.cloudinary.com/namiri/image/upload/v1689116116/logo_2_mano6s.png' ,
    //     intro : "IFAD's financial support and technical assistance contribute to our mission by providing access to knowledge resources, research findings, and best practices in sustainable agriculture and food security."
    // },
    {
        name : 'Bill and Melinda Gates Foundation' ,
        logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822176/Bowmans_Logo_sree7q.png' ,
        intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822181/MacKay_Logo_ehqrho.jpg' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822171/Sycum_Solutions_Logo_g5xnex.png' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822166/Dr._Mutubwa_Law_Logo_x3ehiv.jpg' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822163/Law_Society_of_Kenya_-_Logo_tlfdca.png' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822161/FIDA-Kenya-Logo_xbylsj.webp' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822157/ICC_Kenya_-_Logo_dyeyet.jpg' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822153/East_Africa_International_Arbitration_Conference_-_Logo_ua7iu8.png' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },
    {
      name : 'Bill and Melinda Gates Foundation' ,
      logo : 'https://res.cloudinary.com/namiri/image/upload/v1693822151/TripleOKLaw-Logo_apalaj.svg' ,
      intro : "The Gates Foundation's support helps us develop innovative solutions and leverage technology to address global hunger and poverty, aligning with our mission of creating a more equitable and food-secure future for all."
    },

   

  ];

  return (
    <div className="tabs p-6 md:p-12 container ">
      <div className={` ${styles.intro} p-4 md:py-8 md:px-6  `}>
         <h2>
            Our partners and collaborators
         </h2>   
      </div>       
      <div ref={sliderRef} className={` mx-8 my-4 md:container keen-slider`}>

        { affiliatePartners.map((partner, index) => (
            <div 
            key={index}
            className={`  keen-slider__slide  ${styles.teamMember} `}>
            <Image
                key={index}
                className={` ${styles.partnerLogos} tab-button ${activeTab === index ? 'active' : ''} `} 
                cloudName="namiri" 
                publicId={partner.logo} 
                alt={partner.name}  
                onClick={() => handleTabClick(index)} 
            /> 
            </div>
            
        ))
        }

       
      </div>
      <div className="border-b border-dashed border-gray-5 my-8"></div>
    
    </div>
  );
};

export default Partners;
