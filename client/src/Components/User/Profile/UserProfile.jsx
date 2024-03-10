import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import axios from "axios"
import { Toaster } from 'react-hot-toast'
import baseurl from "../../../Api/baseurl"
import { Link, useNavigate } from "react-router-dom"
import "../../style.css"
const UserProfile = () => {
  let navigate = useNavigate();
  let userid = localStorage.getItem("userid");
  let [loading, setLoading] = useState(false);
  let [errormsg, setErrormsg] = useState("");
  let [userDetail, setUserdetail] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/users/${userid}`);
        let data = response.data.user;
        setUserdetail(data);
      } catch (error) {
        setErrormsg(error.response.data.message)
      } finally {
        setErrormsg(false);
      }
    }

    fetchdata();
  })
  let logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
    {localStorage.length===0 ? 
      window.location.href = "/"
    :
    <>
     <div className='flex'>
      <SideBar />
      <main className='w-full lg:py-36 py-10 lg:pl-72 pl-10 lg:pr-20 pr-10 bg-blue-300 h-[100vh] overflow-y-scroll'>
        <div className='shadow-lg p-10 bg-white rounded-md' >
          <h1 className='text-center font-bold text-3xl p-3'>Your profile</h1>
          <div className='lg:flex flex-none lg:space-x-10 space-x-0 lg:text-start text-center items-center'>
            {userDetail.length === 0 && loading === true ?
              <div className="loader"></div>
              :
              <>
                <figure className='lg:w-80 w-full  '>
                  <img src={userDetail.useravatar} alt={userDetail.username} />
                </figure>
                <div className='text-xl '>
                  <h3><b>Your Name </b> : {userDetail.username}</h3>
                  <h3><b>Your phone number </b>: {userDetail.userphno}</h3>
                  <h3><b>Your mail id </b>: {userDetail.usermail}</h3>
                  <h3><b>Your skills </b>: {userDetail.userskills}</h3>
                  <Link to='/user/update-profile'>
                    <button className='bg-blue-600 text-white w-full mt-3 p-3 rounded-md'>Update</button>

                  </Link>
                  <Link to='/'>
                    <button onClick={logoutHandler} className='bg-red-600 text-white w-full mt-3 p-3 rounded-md'>Log out</button>
                  </Link>
                </div>
              </>

            }

            <Toaster />
          </div>
        </div>
      </main>
    </div>
    </>
    }
   
    </>
  )
}

export default UserProfile