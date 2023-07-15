import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import styles from '../styles/nav.module.scss'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };


  return (
    <>
         <nav className=" px-2 sm:px-6 py-2 bg-gray">
            <div className=" flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src='https://res.cloudinary.com/namiri/image/upload/v1689296105/logo_3_fxmage.png' alt="" className={` ${styles.logo} `}/>
                </Link>
                <div className="md:hidden sm:block px-4">
                        <button 
                            type="button"
                            className="text-black px-4 py-3 rounded "
                            onClick={handleToggle}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
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
                            <Link to='/events'>Events</Link>
                    </li>
                    <li className={` ${styles.navlink} `}>
                            <Link to='/news-blogs'> Blogs </Link>
                    </li>
                

                </ul>
                
                
                
                </div>
                <div className="btn-class hidden md:block">
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
         {/* mobile menu  */}
         <div role="dialog" aria-modal="true" className={` ${styles.MobileMenu} `}>
                    <div focus="true" className={`fixed inset-0 z-10 overflow-y-auto bg-gray px-6 py-6 lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <img src="https://res.cloudinary.com/namiri/image/upload/v1689296105/logo_3_fxmage.png" className={` ${styles.logo} `} alt="WADR"/>
                        </Link>
                        <button 
                             type="button"
                             className="-m-2.5 rounded-md p-2.5 "
                             onClick={handleToggle}
                            >
                            <span className="sr-only">Close menu</span>
                            {/* <!-- Heroicon name: outline/x-mark --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="mt-9 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 px-5 text-xl">
                                    <Link 
                                    onClick={handleToggle}
                                    to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Home </Link>

                                    <Link onClick={handleToggle} to="/about" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> About Us </Link>

                                    <Link onClick={handleToggle} to='/committee-members'className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> The Team </Link>


                                    <Link onClick={handleToggle} to='/events'className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Events </Link>

                                    <Link onClick={handleToggle} to='/news-blogs' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Blogs </Link>

                                    <Link onClick={handleToggle} href="/contact" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Contact Us </Link>

                                </div>
                               
                            </div>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default Navbar;