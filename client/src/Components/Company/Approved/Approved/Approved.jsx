import React from 'react'
import axios from "axios";
import baseurl from "../../../../Api/baseurl"
import toast from "react-hot-toast"
const Approved = ({applicantid,applicantname,applicantavatar,applicantjob,applicantcontact,applicantmail}) => {
  let removeButton = async (applicantid)=>{
    try {
      let response = await axios.delete(`${baseurl}/applications/delete-application/${applicantid}`);
      let data = response.data;
      setTimeout(()=>{
        toast.success(data.message);
      },1000)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="flex p-3 m-3 bg-white shadow-lg rounded-md items-center space-x-10 w-full">
    <figure className="w-52">
      <img
        src={applicantavatar}
        alt={applicantname}
      />
    </figure>
    <div>
      <h2 className="font-bold text-3xl">{applicantname}</h2>
      <p className="text-2xl">Applied for {applicantjob}</p>
      <p>Contact number : {applicantcontact}</p>
      <p>Mail ID : {applicantmail}</p>
      <div className="space-x-3 mt-3">
        <button onClick={()=>removeButton(applicantid)} className="bg-red-600 text-white p-2 w-full">Remove</button>
      </div>
    </div>
  </div>
  )
}

export default Approved