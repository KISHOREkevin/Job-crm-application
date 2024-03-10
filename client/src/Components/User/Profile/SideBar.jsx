import React, { useState } from 'react'
import {NavLink,Link} from "react-router-dom"
const SideBar = () => {
  let [hidden, setHidden] = useState(true);
  let sidebarTogglebutton = () => {
    setHidden(!hidden);
  }
  return (
    <>

      {hidden ?
        <>
          <button onClick={sidebarTogglebutton} className='m-3 visible lg:hidden fixed' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
          <div className='shadow-lg  w-50  h-[100vh] hidden lg:block  fixed bg-white' >
            <h1 className='text-3xl font-bold p-4'>Career Cart</h1>

            <NavLink>
              <ul className="flex flex-col  pt-10">
                <Link to="/user/home" className='bg-blue-600 text-white p-5'><li>Profile</li></Link>
                <Link to="/user/available-jobs" className='hover:bg-blue-600 hover:text-white p-5'><li>Available Jobs</li></Link>
                <Link to="/user/applied-jobs" className='hover:bg-blue-600 hover:text-white p-5'> <li>Applied Jobs</li></Link>
                <Link to='/user/approved-jobs' className='hover:bg-blue-600 hover:text-white p-5'><li>Approved Jobs</li></Link>
                <Link to='/user/rejected-jobs' className='hover:bg-blue-600 hover:text-white p-5'><li>Rejected Jobs</li></Link>

              </ul>
            </NavLink>
          </div>
        </>
        :
        <>
         
          <div className='shadow-lg  w-50  h-[100vh]  block  fixed bg-white' >
            <button onClick={sidebarTogglebutton} className='m-3 visible lg:hidden fixed' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
            </button>
            <h1 className='text-3xl font-bold p-10 '>Career Cart</h1>

            <NavLink>
              <ul className="flex flex-col  pt-10">
                <Link to="/user/home" className='bg-blue-600 text-white p-5'><li>Profile</li></Link>
                <Link to="/user/available-jobs" className='hover:bg-blue-600 hover:text-white p-5'><li>Available Jobs</li></Link>
                <Link to="/user/applied-jobs" className='hover:bg-blue-600 hover:text-white p-5'> <li>Applied Jobs</li></Link>
                <Link to='/user/approved-jobs' className='hover:bg-blue-600 hover:text-white p-5'><li>Approved Jobs</li></Link>
                <Link to='/user/rejected-jobs' className='hover:bg-blue-600 hover:text-white p-5'><li>Rejected Jobs</li></Link>

              </ul>
            </NavLink>
          </div>
        </>
      }

    </>
  )
}

export default SideBar