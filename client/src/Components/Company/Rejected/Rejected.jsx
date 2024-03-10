import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import Rejects from './Rejected/Rejects'
import axios from 'axios';
import baseurl from '../../../Api/baseurl';
import { Toaster } from 'react-hot-toast';
const Rejected = () => {
  let [rejects,setRejects] = useState([]);
  let companyid = localStorage.getItem("companyid");
  useEffect(()=>{
    let fetchdata = async ()=>{
      try {
        let response = await axios.get(`${baseurl}/applications/application-by-category/${companyid}?rejected=true&approved=true`);
        let data = response.data.rejectedapplications;
        setRejects(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchdata();
  })
  return (
    <div className='flex'>
    <SideBar />
    <main className='w-full py-3 pl-52 bg-blue-300 overflow-y-scroll h-[100vh]'>

      <h1 className='text-center font-bold text-3xl p-3'>Applicants Rejected</h1>
      {rejects.length !== 0 ? 
        <>
      
      <Rejects rejects={rejects} />
        </>
      :
      <h1 className='text-center  text-3xl'>No applicants rejected ...</h1>
      }
      
    </main>
    <Toaster />
</div>
  )
}

export default Rejected