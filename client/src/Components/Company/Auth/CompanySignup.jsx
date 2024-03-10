import React, { useState } from 'react'
import axios from "axios";
import baseurl from '../../../Api/baseurl.js';
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"
const CompanySignup = () => {
  let navigate = useNavigate();
  let [companyName, setCompanyName] = useState("");
  let [comnpanyMail, setCompanyMail] = useState("");
  let [companyPassword, setCompanyPassword] = useState("");
  let [companyLocation, setCompanyLocation] = useState("");
  let [companyContactNumber, setCompanyContactNumber] = useState("");
  let [companyAvatar, setCompanyAvatar] = useState("");
  
  let submitHandler = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData();
      formData.append("companyname", companyName);
      formData.append("companymailid", comnpanyMail);
      formData.append("companypassword", companyPassword);
      formData.append("companylocation", companyLocation);
      formData.append("companyphno", companyContactNumber);
      formData.append("companyavatar", companyAvatar);

      let response = await axios.post(`${baseurl}/companies`, formData);
      navigate("/company/sign-in");
      setTimeout(()=>{
        toast.success(response.data.message);
      },1000)
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  }
  return (
    <>
      <div className='container mx-auto flex justify-center items-center h-[100vh]'>
        <div className='shadow-lg p-10 bg-blue-100 w-[50%] m-10 rounded-md'>
          <form onSubmit={submitHandler}>
            <label htmlFor="companyname">Enter the company name :</label><br />
            <input className='ring-1 rounded-md w-full text-xl p-1' onChange={(e) => setCompanyName(e.target.value)} type="text" name="companyname" id="companyname" value={companyName} required /><br /><br />
            <label htmlFor="companymailid">Enter the company mail:</label><br />
            <input onChange={(e) => setCompanyMail(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="companymailid" id="companymailid" value={comnpanyMail} required /><br /><br />
            <label htmlFor="companypassword">Enter the password:</label><br />
            <input onChange={(e) => setCompanyPassword(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="password" name='companypassword' id='companypassword' value={companyPassword} required /><br /><br />
            <label htmlFor="companylocation">Enter the location of the company :</label><br />
            <textarea onChange={(e) => setCompanyLocation(e.target.value)} className='ring-1 rounded-md w-full text-xl' name="companylocation" id="companylocation" value={companyLocation} required ></textarea><br /><br />
            <label htmlFor="companyphno">Enter the company contact number :</label><br />
            <input onChange={(e) => setCompanyContactNumber(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="companyphno" id="companyphno" value={companyContactNumber} required /><br /><br />
            <label htmlFor="companyavatar">Upload the company image :</label><br />
            <input onChange={(e) => setCompanyAvatar(e.target.files[0])} className='ring-1 rounded-md w-full p-1' type="file" name='companyavatar' id='companyavatar' required /><br /><br />
            <button type='submit' className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default CompanySignup