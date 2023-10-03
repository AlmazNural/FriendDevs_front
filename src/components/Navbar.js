// hook
import React, { useState } from 'react'
// assets
import { BiChevronDown } from "react-icons/bi";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from '../assets/logo_navbar.png'
// router
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { link: "Overiew", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" }
    ]

    return (
        <>
            <nav className=' md:px-40 p-4 max-w-screen-2x1 border-b mx-auto fixed top-0 right-0 left-0 text-white color'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>

                    <div className='flex space-x-14 items-center'>
                        <a href='/' className='font-semibold flex items-center space-x-15 text-white'>
                            <img src={logo} alt='logo' className='w-10 px-1 inline-block items-center' /> CAPE
                        </a>

                        <ul className='md:flex space-x-10 hidden '>

                            <li>
                                <NavLink to="/about" className='block hover:text-gray-300 cursor-pointer'>About Us</NavLink>
                            </li>

                            <li>
                                <NavLink to="introduction" className='block hover:text-gray-300 cursor-pointer'>Our Work</NavLink>
                            </li>

                            <li>
                                <NavLink to="contest" className='block hover:text-gray-300 cursor-pointer'>News & Stories</NavLink>
                            </li>

                            <li>
                                <NavLink to="contest" className='block hover:text-gray-300 cursor-pointer'>Get Involved</NavLink>
                            </li>

                        </ul>
                    </div>

                    {/* language & signup */}

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center hover:text-gray-300'> <span>Eng</span> <BiChevronDown className='text-yellow-400'/> </a>
                        <button className='bg-yellow-300 py-2 px-4 text-bold translate-all duration-300 rounded hover:text-white hover:bg-yellow-400 text-black'>Donate</button>
                    </div>

                    {/* menu */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary text-lg' />)
                            }
                        </button>
                    </div>

                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 color ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block text-white hover:text-gray-400' onClick={toggleMenu}> {link}</Link>)
                }
            </div>
        </>

    )
}

export default Navbar