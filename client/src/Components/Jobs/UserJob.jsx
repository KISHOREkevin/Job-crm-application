import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import baseurl from "../../Api/baseurl"
import toast, { Toaster } from "react-hot-toast"
const UserJob = () => {
  let navigate = useNavigate();
  let { jobid } = useParams();
  let userid = localStorage.getItem("userid");
  let [jobDetail, setJobdetail] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true)
      try {
        let response = await axios.get(`${baseurl}/jobs/${jobid}`);
        let data = response.data.job;
        setJobdetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }

    }
    fetchdata();
  })
  let applyjobButtonHandler = async (jobid, companyid, userid) => {
    try {
      let response = await axios.post(`${baseurl}/applications/?userid=${userid}&companyid=${companyid}&jobid=${jobid}`);
      let data = response.data;
      navigate("/user/applied-jobs");
      setTimeout(() => {
        toast.success(data.message)
      }, 1000)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (

    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          {jobDetail.length === 0 && loading === true ?
            <div className="loader"></div>
            :
            <>
              <div className='bg-blue-300 h-[100vh] flex justify-center items-center'>
                <main className='bg-white p-10 shadow-lg rounded-md'>
                  <h1 className='font-bold text-3xl text-center'>{jobDetail.jobname}</h1>
                  <h2 className='text-xl'>Job requirements : {jobDetail.jobrequirements}</h2>
                  <p className='text-center text-xl'>{`Salary range : ${jobDetail.jobsalaryfrom} - ${jobDetail.jobsalaryto}`}</p>
                  <div className='flex space-x-3 mt-3'>

                    <button onClick={() => applyjobButtonHandler(jobid, jobDetail.jobprovider._id, userid)} className='bg-blue-600 text-white w-full py-2 px-5'>Apply Now</button>


                  </div>
                  <Toaster />
                </main>

              </div>
            </>
          }

        </>
      }

    </>
  )
}

export default UserJob