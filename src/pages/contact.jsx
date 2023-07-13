import React from 'react'
import { Footer, Navbar , MyForm } from '../components'
import styles from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <>
    <main>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <section className={` ${styles.mainBody} `}>
      <div className={` container md:grid grid-cols-2 gap-5 `}>
          
          <div className="bodySt p-2 md:p-8 ">
            <p className={ `${styles.footerText}` }> 
              Home / Contact
            </p>
            <h2 className={` ${styles.footerTT} `}>
              Together we can make the impact needed .
            </h2>
            <p className={` ${styles.footerText} `}>
            Submit the following form and our team will be in touch with you shortly. Alternatively, you can contact us via email through our mailbox: <span className='text-yellow font-bold underline underline-offset-8'> wadr@womeninadr.com </span> 
            </p>
            <div className="location mt-7">
                <p className={ `${styles.footerText} underline` }> 
                OR visit:
                </p>
                <h4 className="locatt font-bold mt-3 text-yellow underline">
                    Our Offices
                </h4>
                <p className={` ${styles.footerText} `}>
                    WuYi Plaza, Galana Road,
                    <br/>
                    Kilimani. Nairobi, Kenya
                    <br/>
                    Postal Address: 22568 - 00100
                </p>
            </div>
          </div>
          <div className="contactForm my-8 md:my-0 p-4 md:p-8  ">
              <MyForm/>
          </div>
          
      </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Contact