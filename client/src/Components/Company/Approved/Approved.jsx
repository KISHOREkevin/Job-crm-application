import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import Approveds from './Approved/Approveds'
import axios from 'axios';
import baseurl from '../../../Api/baseurl';
import { Toaster } from 'react-hot-toast';
const Approved = () => {
  let [approved, setApproved] = useState([]);
  let companyid = localStorage.getItem("companyid");
  useEffect(() => {
    let fetchdata = async () => {

      try {
        let response = await axios.get(`${baseurl}/applications/application-by-category/${companyid}?rejected=true&approved=true`);
        let data = response.data.approvedapplications;
        setApproved(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchdata();
  }, [approved])
  return (
    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          <div className='flex'>
            <SideBar />
            <main className='w-full py-3 pl-52 bg-blue-300 overflow-y-scroll h-[100vh]'>

              <h1 className='text-center font-bold text-3xl p-3'>Applicants Approved</h1>
              {approved.length !== 0 ?
                <>
                  
                  <Approveds approved={approved} />
                </>
                :
                <h1 className='text-center  text-3xl'>No applicants approved ...</h1>
              }




              <Toaster />
            </main>
          </div>
        </>
      }

    </>
  )
}

export default Approved