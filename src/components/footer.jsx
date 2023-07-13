import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook , BsTwitter , BsInstagram } from 'react-icons/bs'
import styles from '../styles/nav.module.scss'
import Social from './social'

const Footer = () => {
  return (
    <>
        <Social/>
        <footer className='bg-purple p-10 ' >
            <div className="container">




                {/*  */}
                <div className="border-b border-dashed border-gray-5 my-8"></div>

                <div className="footer-links">
                    
                    <div className="grid grid-cols-2 gap-5 justify-start">

                    <div className="footer-links-1 col-span-1 flex items-start justify-start ">
                            <div className="copyright px-2">
                            <p className='text-white'>
                                © 2023 WADR
                            </p>
                            </div>
                            <div className="copyright px-2">
                            <Link to='/privacy-policy' className='text-white underline underline-offset-4'>
                            Privacy Policy 
                            </Link>
                            </div>
                            <div className="copyright px-2">
                            <p className='text-white underline underline-offset-4'>
                                Terms of Use
                            </p>
                            </div>
                    </div>

                    <div className="footer-links-2 col-span-1 flex items-start justify-end">
                        <div className={`iconBox  px-3`}>
                        <span className='text-white '>
                        <BsFacebook/>
                        </span>
                        </div>
                        <div className="icon-box  px-3">
                        <span className='text-white'>
                        <BsTwitter/>
                        </span>
                        </div>
                        <div className="icon-box  px-3">
                        <span className='text-white'>
                        <BsInstagram/>
                        </span>
                        </div>
                        
                    </div>

                    </div>

                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer