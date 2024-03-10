import React from 'react'
import Approved from './Approved'
const Approveds = ({approved}) => {
  return (
    <div className='flex flex-wrap'>
    {approved.map((approve)=>{
       return (
        <Approved key={approve._id} applicantname={approve.userdetails.username} applicantid={approve._id} applicantavatar={approve.userdetails.useravatar} applicantjob={approve.jobdetails.jobname} applicantcontact={approve.userdetails.userphno} applicantmail={approve.userdetails.usermail} />
       )
    })}
   
    
  </div>
  )
}

export default Approveds