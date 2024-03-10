import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseurl from '../../../Api/baseurl';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const CompanyUser = () => {
    let {companyid} = useParams();
    let [companyDetails,setCompanyDetails] = useState([]);
    let [loading,setLoading] = useState(false);
    useEffect(()=>{
        let fetchdata = async ()=>{
            setLoading(true);

            try {
                let response = await axios.get(`${baseurl}/companies/${companyid}`);
                let data = response.data.company;
                setCompanyDetails(data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fetchdata();
    },[companyDetails])
  return (
    <>
    {localStorage.length===0 ? 
      window.location.href = "/"
    :
    <>
     <div className='flex'>
   
      <main className='w-full h-[100vh] bg-blue-300 overflow-y-scroll'>
        <div className='shadow-lg lg:p-10 p-3 lg:m-32 m-3 bg-white rounded-md ' >
          <h1 className='text-center font-bold text-3xl p-3'>Company profile</h1>
          <div className='lg:flex flex-none lg:space-x-10 space-x-0 items-center'>
            {companyDetails.length === 0 && loading === true ?
              <div className="loader"></div>
              :
              <>
                <figure className='w-80 lg:ml-0 p-3'>
                  <img src={companyDetails.companyavatar} alt={companyDetails.companyname} />
                </figure>
                <div className='text-xl '>
                  <h3><b>Company Name </b> : {companyDetails.companyname}</h3>
                  <h3><b>Company contact number </b>: {companyDetails.companyphno}</h3>
                  <h3><b>Company mail id </b>: {companyDetails.companymailid}</h3>
                  <h3><b>Comapny location </b>: {companyDetails.companylocation}</h3>
                </div>
              </>

            }

            <Toaster />
          </div>
        </div>
      </main>
    </div>
    </>
    }
   
    </>
  )
}

export default CompanyUser