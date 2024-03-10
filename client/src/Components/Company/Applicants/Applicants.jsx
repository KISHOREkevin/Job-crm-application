import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import Applications from './Applicants/Applications'
import axios from "axios"
import baseurl from "../../../Api/baseurl"
import { Toaster } from 'react-hot-toast'
import "../../style.css"
const Applicants = () => {
  let [applicants, setApplicants] = useState([]);
  let companyid = localStorage.getItem("companyid");
  let [errormsg, setErrormsg] = useState("");
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${baseurl}/applications/application-by-company/${companyid}`);
        let data = response.data.applications;
        setApplicants(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, [applicants])
  return (
    <>
      {localStorage.length === 0 ?
        window.location.href = "/"
        :
        <>
          <div className='flex'>
            <SideBar />
            <main className='w-full py-3 pl-52 bg-blue-300 h-[100vh] overflow-y-scroll'>
              {(applicants.length === 0 && loading === true) ?
                (<div className='loader'></div>)
                :
                <>
               
                  {errormsg === "" ?
                    (
                      <>


                        <Applications applicants={applicants} />
                      </>
                    )
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

export default Applicants