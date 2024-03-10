import axios from 'axios'
import React,{useState,useEffect} from 'react'
import baseurl from '../../../../Api/baseurl'
import toast from 'react-hot-toast'
import {Link, useNavigate} from "react-router-dom";
const Job = ({jobid,jobname,jobsalaryfrom,jobsalaryto}) => {
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
  let deleteHandler = async (jobid)=>{
    try {
      let response = await axios.delete(`${baseurl}/jobs/delete-job/${jobid}`);
      let data = response.data;
      window.location.href;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='shadow-lg w-80  rounded-md p-5 m-3 bg-white'>
        <Link to={`/company/job/${jobid}`}><h2 className='font-bold text-3xl'>{jobname}</h2></Link>
        <p>{`Salary range : Rs.${jobsalaryfrom} - Rs.${jobsalaryto}`}</p>
        <p  >Number of applicants : {applicantCount}</p>
        <div className='flex space-x-2  ' >
        <Link to={`/company/${jobid}/update-job`} className='bg-blue-600 text-white w-full text-center p-2 rounded-md'> <button >Edit</button></Link>
        <button onClick={()=>{deleteHandler(jobid)}} className='bg-red-600 text-white w-full p-2 rounded-md'>delete</button>
        
        </div>
    </div>
  )
}

export default Job