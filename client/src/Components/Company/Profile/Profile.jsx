import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import axios from "axios"
import baseurl from "../../../Api/baseurl.js"
import { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"
import "../../style.css";
const Profile = () => {
  let [profileData, setProfileData] = useState([]);
  let [loading, setLoading] = useState([]);
  let companyid = localStorage.getItem("companyid");
  let [errormsg, setErrormsg] = useState("");
  let navigate = useNavigate();
  useEffect(() => {

    let fetchData = async () => {
      setLoading(true)
      try {
        let response = await axios.get(`${baseurl}/companies/${companyid}`);
        let data = response.data.company;
        setProfileData(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      } finally {
        setLoading(false);
      }

    }

    fetchData();
  }, [profileData]);

  let logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      {localStorage.length === 0 ?

        window.location.href = "/"
        :
        <>
          <div className='flex'>
            <SideBar />
            <main className='w-full py-36 pl-72 pr-20 bg-blue-300'>
              <div className='shadow-lg p-10 bg-white rounded-md' >
                <h1 className='text-center font-bold text-3xl p-3'>Your company profile</h1>
                <div className='flex space-x-10 items-center'>
                  {profileData.length === 0 && loading === true ?
                    <div className="loader"></div>
                    :
                    <>
                      <figure className='w-80 '>
                        <img src={profileData.companyavatar} alt={profileData.companyname} />
                      </figure>
                      <div className='text-xl '>
                        <h3><b>Company name </b> : {profileData.companyname}</h3>
                        <h3><b>Company Location </b>: {profileData.companylocation}</h3>
                        <h3><b>Company phone number </b>: {profileData.companyphno}</h3>
                        <h3><b>Company mail </b>: {profileData.companymailid}</h3>
                        <Link to='/company/update'>
                          <button className='bg-blue-600 text-white w-full mt-3 p-3 rounded-md'>Update</button>

                        </Link>

                        <button onClick={logoutHandler} className='bg-red-600 text-white w-full mt-3 p-3 rounded-md'>Log out</button>
                      </div>
                    </>

                  }

                </div>
                <Toaster />
              </div>
            </main>
          </div>
        </>

      }

    </>
  )
}

export default Profile