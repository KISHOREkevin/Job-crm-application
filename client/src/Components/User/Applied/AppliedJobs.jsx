import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Jobs from './Jobs/Jobs'
import { Toaster } from 'react-hot-toast'
import baseurl from "../../../Api/baseurl"
import axios from "axios"
import "../../style.css"
const AppliedJobs = () => {
  let [applied, setApplied] = useState([]);
  let userid = localStorage.getItem("userid");
  let [loading, setLoading] = useState(false);
  let [errormsg, setErrormsg] = useState("");
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/applications/application-by-user/${userid}`)
        let data = response.data.applications;
        setApplied(data);
      } catch (error) {
        setErrormsg(error.response.data.message)

      } finally {
        setLoading(false)
      }
    }

    fetchdata();
  }, [applied])
  return (
    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          <div className='flex '>
            <SideBar />
            <main className='w-full py-3 lg:pl-60 p-3 bg-blue-300 h-[100vh] overflow-y-scroll'>
              <h1 className='text-center font-bold text-3xl p-3'>Applied Jobs</h1>
              {applied.length === 0 && loading === true ?
                <div className="loader"></div>
                :
                <>
                  {errormsg === "" ?
                    <Jobs applied={applied} />
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

export default AppliedJobs