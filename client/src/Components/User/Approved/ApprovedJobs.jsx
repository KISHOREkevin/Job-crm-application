import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Jobs from './Jobs/Jobs'
import axios from "axios"
import baseurl from "../../../Api/baseurl"
import "../../style.css"
const ApprovedJobs = () => {
  let [approved, setApproved] = useState([]);
  let userid = localStorage.getItem("userid");
  let [loading,setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/applications/application-by-category-user/${userid}?rejected=true&approved=true`);
        let data = response.data.approvedapplications;
        setApproved(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
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
              <h1 className='text-center font-bold text-3xl p-3'>Approved Jobs</h1>
              {approved.length === 0 && loading===true ?
                <div className="loader"></div>
                :
                <>
                {approved.length===0 ? 
                  <h1 className='text-3xl text-center'>No Applications Approved...</h1>
                
                :
                <Jobs approved={approved} />
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

export default ApprovedJobs