import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import baseurl from "../../Api/baseurl"
import toast, { Toaster } from "react-hot-toast"
const CompanyJob = () => {
  let navigate = useNavigate();
  let { jobid } = useParams();
  let [jobDetail, setJobdetail] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/jobs/${jobid}`);
        let data = response.data.job;
        setJobdetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }
    fetchdata();
  })

  let deleteHandler = async (jobid) => {
    try {
      let response = await axios.delete(`${baseurl}/jobs/delete-job/${jobid}`);
      let data = response.data;
      navigate("/company/posted-jobs");
      setTimeout(() => {
        toast.success(data.message);
      }, 1000)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <div className='bg-blue-300 h-[100vh] flex justify-center items-center'>
        <main className='bg-white p-10 shadow-lg text-center rounded-md'>
          {jobDetail.length === 0 && loading === true ?
            <div className="loader"></div>
            :
            <>


              <h1 className='font-bold text-3xl '>{jobDetail.jobname}</h1>
              <h2 className='text-xl text-center'>Job requirements : {jobDetail.jobrequirements}</h2>
              <p className=' text-xl'>{`Salary range : ${jobDetail.jobsalaryfrom} - ${jobDetail.jobsalaryto}`}</p>
              <div className='flex space-x-3 mt-3'>
                <Link to={`/company/${jobid}/update-job`} className='w-full ' >
                  <button className='bg-blue-600 text-white w-full py-2 px-5'>Edit</button>
                </Link>
                <button onClick={() => deleteHandler(jobid)} className='bg-red-600 text-white w-full py-2 px-5'>Delete</button>
              </div>
              <Toaster />



            </>
          }
        </main>
      </div>
    </>
  )
}

export default CompanyJob;