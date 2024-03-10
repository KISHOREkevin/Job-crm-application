import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import Jobs from './PostedJobs/Jobs'
import axios from "axios"
import { Toaster } from "react-hot-toast"
import baseurl from "../../../Api/baseurl"
import "../../style.css"
import { Link } from 'react-router-dom'
const PostedJobs = () => {
  let [postedJobs, setPostedjobs] = useState([]);
  let [errormsg, setErrormsg] = useState("");
  let [loading,setLoading] = useState(false);
  let companyid = localStorage.getItem("companyid");
  useEffect(() => {
    let fetchData = async () => {
      setLoading(true)
      try {
        let response = await axios.get(`${baseurl}/jobs/posted-jobs?companyid=${companyid}`);
        let data = response.data.jobs;
        setPostedjobs(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }finally{
        setLoading(false);

      }
    }

    fetchData();
  },[postedJobs])
  return (
    <>
    {localStorage.length === 0 ? 
      window.location.href = "/"
    :
    <>
 <div className='flex '>
      <SideBar />
      <main className='w-full py-3 pl-60 bg-blue-300 overflow-y-scroll h-[100vh]'>
        {postedJobs.length === 0 && loading === true  ?
          (<div className="loader"></div>)
          :
          <>
            <Link to="/company/add-job" className='float-end bg-blue-600 text-white p-3 mx-3 rounded-md' ><button>Add job</button></Link>
            <h1 className='text-center font-bold text-3xl p-3'>Posted Jobs</h1>
            {errormsg === "" ?
              <>
                <Jobs jobs={postedJobs} />
              </>
              :
              <h1 className='text-center  text-3xl'>{errormsg}</h1>
            }
          </>
        }


        <Toaster />
      </main>
    </div>
    </>
    
    }
   
    </>
  )
}

export default PostedJobs