import React from 'react'
import {NavLink,Link} from "react-router-dom";
const SideBar = () => {
  return (
    <>
    
    <div className='shadow-lg  w-50  h-[100vh] fixed bg-white' >
    <h1 className='text-3xl font-bold p-4'>Career Cart</h1>
        <NavLink>
            <ul className="flex flex-col  pt-10">
            {/* <a href="/company/home" className='bg-blue-600 text-white p-5'><li>Profile</li></a> */}
            <Link to={"/company/home"} className='bg-blue-600 text-white p-5'><li>Profile</li></Link>
            <Link to="/company/posted-jobs" className='hover:bg-blue-600 hover:text-white p-5'><li>Posted Jobs</li></Link>
            <Link to="/company/applicants" className='hover:bg-blue-600 hover:text-white p-5'> <li>Applicants</li></Link>
            <Link to='/company/approved' className='hover:bg-blue-600 hover:text-white p-5'><li>Approved</li></Link>
            <Link to='/company/rejected' className='hover:bg-blue-600 hover:text-white p-5'><li>Rejected</li></Link>
            
            </ul>
        </NavLink>
    </div>
    </>
  )
}

export default SideBar