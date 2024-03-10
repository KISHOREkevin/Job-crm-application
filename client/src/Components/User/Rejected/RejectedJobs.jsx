import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Jobs from './Jobs/Jobs'
import axios from "axios";
import baseurl from '../../../Api/baseurl';
import "../../style.css"
const RejectedJobs = () => {
  let [rejected, setRejected] = useState([]);
  let userid = localStorage.getItem("userid");
  let [loading,setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true)
      try {
        let response = await axios.get(`${baseurl}/applications/application-by-category-user/${userid}?rejected=true&approved=true`);
        let data = response.data.rejectedapplications;
        setRejected(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }

    fetchdata();
  },[])
  return (
    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          <div className='flex '>
            <SideBar />
            <main className='w-full py-3 lg:pl-60 p-3 bg-blue-300 h-[100vh] overflow-y-scroll'>
              <h1 className='text-center font-bold text-3xl p-3'>Rejected Jobs</h1>
              {rejected.length === 0 && loading===true ?
                  <div className="loader"></div>
                :
                <>
                {rejected.length === 0 ? 
                  <h1 className='text-center  text-3xl'>No jobs rejected ...</h1>
                :
                <Jobs rejected={rejected} />
                }
                </>
               
              }

            </main>
          </div>
        </>
      }

    </>
  )
}

export default RejectedJobs