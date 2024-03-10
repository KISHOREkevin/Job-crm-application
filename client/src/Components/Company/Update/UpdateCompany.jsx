import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseurl from '../../../Api/baseurl';
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
const UpdateCompany = () => {
  let navigate = useNavigate();
  let [companyname, setCompanyName] = useState("");
  let [companymailid, setCompanymailid] = useState("");
  let [companylocation, setCompanylocation] = useState("");
  let [companyphno, setCompanyphno] = useState(0);
  let [companyavatar, setCompanyavatar] = useState("");
  let companyid = localStorage.getItem("companyid");
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`${baseurl}/companies/${companyid}`);
        let data = response.data.company;
        setCompanyName(data.companyname);
        setCompanymailid(data.companymailid);
        setCompanylocation(data.companylocation);
        setCompanyphno(data.companyphno);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    fetchData();
  }, []);

  let submitHandler = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("companyname", companyname);
    formdata.append("companymailid", companymailid);
    formdata.append("companylocation", companylocation);
    formdata.append("companyphno", companyphno);
    formdata.append("companyavatar", companyavatar);
    try {
      let response = await axios.put(`${baseurl}/companies/update-company/${companyid}`, formdata);
      let data = response.data;
      navigate("/company/home");
      setTimeout(() => {
        toast.success(data.message);
      }, 1000)


    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='container mx-auto flex justify-center items-center h-[100vh]'>
      <div className='shadow-lg p-10 bg-blue-100 w-[50%] m-10 rounded-md'>
        <form onSubmit={submitHandler}>
          <label htmlFor="companyname">Enter the company name :</label><br />
          <input onChange={(e) => setCompanyName(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="text" name="companyname" id="companyname" value={companyname} required /><br /><br />
          <label htmlFor="companymailid">Enter the company mail:</label><br />
          <input onChange={(e) => setCompanymailid(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="companymailid" id="companymailid" value={companymailid} required /><br /><br />
          <label htmlFor="companylocation">Enter the location of the company :</label><br />
          <textarea onChange={(e) => setCompanylocation(e.target.value)} className='ring-1 rounded-md w-full text-xl' name="companylocation" id="companylocation" value={companylocation} required ></textarea><br /><br />
          <label htmlFor="companyphno">Enter the company contact number :</label><br />
          <input onChange={(e) => setCompanyphno(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="companyphno" id="companyphno" value={companyphno} required /><br /><br />
          <label htmlFor="companyavatar">Upload the company image :</label><br />
          <input onChange={(e) => setCompanyavatar(e.target.files[0])} className='ring-1 rounded-md w-full p-1' type="file" name='companyavatar' id='companyavatar' required /><br /><br />
          <button className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
        </form>
        <Toaster />
      </div>
    </div>
  )
}

export default UpdateCompany