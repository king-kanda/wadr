import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BsPhoneFill , BsMailbox2 } from "react-icons/bs";
import { Oswald , Raleway} from '@next/font/google'
import styles from '@/styles/nav.module.scss'
const oswald = Oswald({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })


const Nav = () => {


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };



    return (
        <>
        {/* display email  */}
        
        <div className="container bg-transparent  top-0 z-10">            
            <nav className="flex bg-white   items-center justify-between py-2">
                    <div className="p-4">
                        <Link href="/">
                             <Image src="/logo-m.svg" width={150} height={70} alt="magicalkenya_logo"/>
                        </Link>
                    </div>
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
                    <div className="nav-hoolder  hidden w-full md:block md:w-auto " id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                            <li className="p-4">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about">About Us </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/services"> Services </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/projects"> Projects </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/contact"> Blogs </Link>
                            </li>
                          
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-orange-500 text-white px-4 py-3 rounded ">
                            <Link href="/contact"> Contact Us</Link>
                        </button>
                    </div>
            </nav>
            {/* mobile menu  */}
            <div role="dialog" aria-modal="true">
                    <div focus="true" className={`fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image src="/logo-m.svg" width={200} height={200} alt="mbajao logo"/>
                        </Link>
                        <button 
                             type="button"
                             className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                                    href="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Home </Link>

                                    <Link onClick={handleToggle} href="about" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> About Us </Link>

                                    <Link onClick={handleToggle} href="/services" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Services </Link>


                                    <Link onClick={handleToggle} href="/projects" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Projects </Link>

                                    <Link onClick={handleToggle} href="/blogs" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Blogs </Link>

                                    <Link onClick={handleToggle} href="/contact" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"> Contact Us </Link>

                                </div>
                               
                            </div>
                        </div>
                    </div>
            </div>

        </div>
            
     </>

    );
}

export default Nav;