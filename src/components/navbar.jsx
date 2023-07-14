import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/nav.module.scss'

const Navbar = () => {
  return (
    <>
         <nav className=" px-2 sm:px-6 py-2 bg-gray">
            <div className=" flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src='./logo.png ' alt="" className={` ${styles.logo} `}/>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex inter items-center justify-center  text-black flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    
                    <li className={` ${styles.navlink} `}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <Link to='/about'>About Us</Link>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <Link to='/committee-members'>The Team</Link>
                    </li>
                    {/* <li className={` ${styles.navlink} disabled `}>
                            <Link to='/about'>Programs</Link>
                    </li> */}
                    <li className={` ${styles.navlink} `}>
                            <Link to='/about'>Events</Link>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <Link to='/news-blogs'> Blogs </Link>
                    </li>
                

                </ul>
                
                
                
                </div>
                <div className="btn-class">
                    <div className="flex items-center justify-between">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScIgSf8A7k9EuwCzFDUcG80XzfvEvXrkcw5qlxZTecOuZ9Z3Q/viewform">
                                <button className={`px-4 py-3 bg-white border border-2 border-purple text-purple`}>
                                    Join Us
                                </button>
                        </a>
                        <Link to='/contact'  className='px-2'> 
                            <button className={`px-4 py-3 bg-white border border-2 border-purple text-purple`}>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar