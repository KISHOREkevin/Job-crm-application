import React, { useState } from 'react'
import logo from "../../assets/logo1.png"
import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
    let [hidden, setHidden] = useState(true);
    let hamburgerbutton = () => {
        setHidden(!hidden);
    }
    return (
        <div className='shadow-lg mb-3 fixed w-full bg-white'>
            <nav>
                <a href="/">
                    <figure className='inline-block p-3'>
                        <img src={logo} alt="logo" width={200} />
                    </figure>
                </a>

                {hidden ?
                    <>
                        <button onClick={hamburgerbutton} className='lg:hidden m-3 float-end p-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                        <div className=' lg:float-end hidden float-none lg:mx-3 mx-16 mt-3'>
                            <ul className='flex space-x-7'>
                                <NavLink>
                               <Link to="/"> <li className='hover:bg-blue-600 hover:text-white p-2'>Home</li></Link>
                                <Link to="/contact"><li className='hover:bg-blue-600 hover:text-white p-2'>Contact</li></Link>
                                <Link to="/about"><li className='hover:bg-blue-600 hover:text-white p-2'>About</li></Link>
                                </NavLink>
                            </ul>
                        </div>
                    </>
                    :
                    <>
                        <button onClick={hamburgerbutton} className='m-3 lg:hidden bg-blue-600 text-white float-end p-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                        </button>
                        <div className='lg:inline-block lg:float-end block float-none lg:mx-3 mx-0 mt-3'>
                            <ul className='lg:flex text-center'>
                                <NavLink>
                                <Link to="/"><li className='hover:bg-blue-600 hover:text-white p-2'>Home</li></Link>
                                <Link to="contact"><li className='hover:bg-blue-600 hover:text-white p-2'>Contact</li></Link>
                               <Link to="/about"> <li className='hover:bg-blue-600 hover:text-white p-2'>About</li></Link>
                                </NavLink>
                            </ul>
                        </div>
                    </>

                }
                <div className='lg:inline-block lg:float-end hidden  float-none lg:mx-3 mx-16 mt-3'>
                        <NavLink>
                            <ul className='lg:flex text-center  space-x-7'>
                                <Link to="/"><li className='hover:bg-blue-600 hover:text-white p-2'>Home</li></Link>
                               <Link to="/contact"> <li className='hover:bg-blue-600 hover:text-white p-2'>Contact</li></Link>
                                <Link to="/about"><li className='hover:bg-blue-600 hover:text-white p-2'>About</li></Link>
                            </ul>
                            </NavLink>
                        </div>

            </nav>
        </div>
    )
}

export default Navbar