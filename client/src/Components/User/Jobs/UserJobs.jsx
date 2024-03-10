import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Jobs from './Jobs/Jobs'
import axios from "axios"
import baseurl from "../../../Api/baseurl";
import { Toaster } from 'react-hot-toast';
import "../../style.css"
const UserJobs = () => {
  let [userJobs, setUserJobs] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errormsg, setErrormsg] = useState("");
  let [searchJob,setSearchJob] = useState("");
  let [searchedJobs,setSearchedJobs] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/jobs`);
        let data = response.data.jobs;
        setUserJobs(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }

    fetchdata();
  },[userJobs])
  let jobsearchhandler = async ()=>{
      setLoading(true);
      try {
        if(searchJob!=="all"){
          let response = await axios.get(`${baseurl}/jobs/jobs/${searchJob}`);
          let data = response.data.jobs;
          setSearchedJobs(data);
        }else{
          let response = await axios.get(`${baseurl}/jobs`);
          let data = response.data.jobs;
          setSearchedJobs([]);
          setUserJobs(data);
          
        }

      } catch (error) {
        setErrormsg(error.response.data.message);
      }finally{
        setLoading(false);
      }
  }
  return (
    <>
      {localStorage.length === 0 && loading === true ?
        window.location.href = "/"
        :
        <>
          <div className='flex '>
            <SideBar />
            <main className='w-full py-3 lg:pl-60 p-2 bg-blue-300 h-[100vh] overflow-y-scroll'>
              <h1 className='text-center font-bold text-3xl p-3'>Available Jobs</h1>
              <div className='lg:block lg:flex-row  flex flex-col lg:space-x-5 space-x-0  text-center lg:m-10 m-3'>
                <select onChange={(e)=>{setSearchJob(e.target.value)}} className='p-2 rounded-md mb-2' name='role-select' id='role-select'>
                  <option value="" selected disabled>Select-by-category</option>
                  <option value="all">All</option>
                  {userJobs.map((job)=>{
                        return (
                          <option key={job._id} value={job.jobname}>{job.jobname}</option>
                        )
                  })}
                </select>
               
                <button onClick={jobsearchhandler} className='bg-blue-600 px-3 py-1 rounded-md text-white'>search</button>
              </div>
              {userJobs.length === 0 && loading === true ?
                <div className="loader"></div>
                :
                <>
                {errormsg==="" ? 
                  <>
                  {searchedJobs.length === 0 ?
                    <Jobs userjobs={userJobs} />
                  :
                    <Jobs userjobs={searchedJobs} />
                  }
                  
                  </>
                : 
                <h1 className='text-center  text-3xl'>{errormsg}</h1>
                }
                  
                </>
              }

            </main>
            <Toaster />
          </div>
        </>
      }

    </>
  )
}

export default UserJobs