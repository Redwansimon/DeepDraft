import React, { useState } from 'react'
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [ismenuopen, setismenuopen] = useState(false);
    const togglemenu = () => {
        setismenuopen(!ismenuopen);
        console.log(ismenuopen)
    }
    const navitems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" }
    ]
    return (
        <header className='bg-black text-white top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl flex justify-between items-center mx-auto '>
                <a className='text-xl font-bold text-white ' href="/">Deep<span className='text-orange-500'>Draft</span></a>

                {/* nav items for large devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navitems.map(({ path, link }, i) => (
                            // <li key={i} className='text-white' >
                            //     <NavLink className={({isActive})=>{
                            //         isActive?'text-orange-500'
                            //     }} to={path}>{link}</NavLink>
                            // </li>
                            <li key={i} className='text-white'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-500 underline underline-offset-4" : "text-white"
                                    }
                                >
                                    {link}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {/* menu icons  */}
                <div className='text-white lg:flex hidden gap-4 items-center '>
                    <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                </div>
                {/* mobile menu button , display only the mobile screen */}
                <div className='md:hidden'>
                    <button onClick={togglemenu} className='cursor-pointer'>

                        {
                            ismenuopen ?
                                <FaXmark className='w-5 h-5'></FaXmark>
                                :
                                <FaBars className='w-5 h-5'></FaBars>
                        }
                    </button>
                </div>



            </nav>
            {/* menu item for mobile */}
            <div>
                <ul className={`md:hidden  gap-12 text-lg font-semibold block space-y-4 px-4 py-6 mt-14 bg-white ${ismenuopen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navitems.map(({ path, link }, i) => (
                            <li key={i} className='text-black ' >
                                <NavLink onClick={togglemenu} to={path}>{link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar
