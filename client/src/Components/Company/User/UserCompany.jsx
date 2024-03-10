import React, { useEffect, useState } from 'react'

import axios from "axios"
import { Toaster } from 'react-hot-toast'
import baseurl from "../../../Api/baseurl"
import {  useParams } from "react-router-dom"
import "../../style.css"
const UserCompany = () => {

  let { userid } = useParams();
  let companymail = localStorage.getItem("companymail");
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
        setLoading(false);
      }
    }


    fetchdata();
  })
  useEffect(() => {
    let sendmailHandler = async (applicantmail, companymail) => {
      try {
        let response = await axios.get(`${baseurl}/email/send-checking-status?fromemailid=${companymail}&toemailid=${applicantmail}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    sendmailHandler(userDetail.usermail,companymail);
  },[userDetail.usermail,companymail])

  return (
    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          <div className='flex'>

            <main className='w-full h-[100vh] bg-blue-300 overflow-y-scroll'>
              <div className='shadow-lg p-10 m-32 bg-white rounded-md ' >
                <h1 className='text-center font-bold text-3xl p-3'>User profile</h1>
                <div className='flex space-x-10 items-center'>
                  {userDetail.length === 0 && loading === true ?
                    <div className="loader"></div>
                    :
                    <>
                      <figure className='w-80 '>
                        <img src={userDetail.useravatar} alt={userDetail.username} />
                      </figure>
                      <div className='text-xl '>
                        <h3><b>Applicant Name </b> : {userDetail.username}</h3>
                        <h3><b>Applicant phone number </b>: {userDetail.userphno}</h3>
                        <h3><b>Applicant mail id </b>: {userDetail.usermail}</h3>
                        <h3><b>Applicant skills </b>: {userDetail.userskills}</h3>
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

export default UserCompany