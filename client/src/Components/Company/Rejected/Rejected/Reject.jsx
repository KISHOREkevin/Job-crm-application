import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import baseurl from '../../../../Api/baseurl';
const Reject = ({rejectid,rejectavatar,rejectname,rejectjob,rejectcontact,rejectmail}) => {
  let removeButton = async (rejectid)=>{
    try {
      let response = await axios.delete(`${baseurl}/applications/delete-application/${rejectid}`);
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
        src={rejectavatar}
        alt={rejectname}
      />
    </figure>
    <div>
      <h2 className="font-bold text-3xl">{rejectname}</h2>
      <p className="text-2xl">Applied for {rejectjob}</p>
      <p>Contact number : {rejectcontact}</p>
      <p>Mail ID : {rejectmail}</p>
      <div className="space-x-3 mt-3">
        
        <button onClick={()=>removeButton(rejectid)} className="bg-red-600 text-white p-2 w-full">Remove</button>
      </div>
    </div>
  </div>
  )
}

export default Reject