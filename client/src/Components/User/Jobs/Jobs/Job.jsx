import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import baseurl from '../../../../Api/baseurl';
import axios from 'axios';
const Job = ({jobid,jobname,jobsalaryfrom,jobsalaryto,jobprovider,jobproviderid}) => {
  let navigate = useNavigate();
  let userid = localStorage.getItem("userid");
  let [applicantCount,setApplicantCount] = useState(0);
  useEffect(()=>{
    let fetchdata = async ()=>{
     try {
      let response = await axios.get(`${baseurl}/applications/application-by-job/${jobid}`);
      let data = response.data.applications;
      setApplicantCount(data.length);
     } catch (error) {
      console.log(error)
     }
    }

    fetchdata();
  })
  let applyjobButtonHandler = async (jobid,companyid,userid )=>{
    try {
        let response = await axios.post(`${baseurl}/applications/?userid=${userid}&companyid=${companyid}&jobid=${jobid}`);
        let data = response.data;
        navigate("/user/applied-jobs");
        setTimeout(()=>{
            toast.success(data.message)
        },1000)
    } catch (error) {
       toast.error(error.response.data.message)
    }
  }
  return (
    <div className='shadow-lg w-80 rounded-md p-5 m-3 bg-white'>
        <Link to={`/user/job/${jobid}`}><h2 className='font-bold text-3xl'>{jobname}</h2></Link>
        <p>{`salary range : ${jobsalaryfrom} - ${jobsalaryto}`}</p>
        <p>Number of applicants : {applicantCount}</p>
        <Link to={`/user/company-details/${jobproviderid}`} className='hover:text-blue-600 hover:underline'>Provider : {jobprovider}</Link>
        <div className='flex space-x-2 mt-3' >
        <button onClick={()=>applyjobButtonHandler(jobid,jobproviderid,userid)} className='bg-blue-600 text-white w-full text-center p-2 rounded-md' >Apply Now</button>
        <Toaster />
        </div>
    </div>
  )
}

export default Job