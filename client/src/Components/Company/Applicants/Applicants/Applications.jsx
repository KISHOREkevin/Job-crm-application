import React from 'react'
import Applicant from "./Applicant";
const Applications = ({applicants}) => {
  return (
    <div className='flex flex-wrap'>
      {applicants.map((applicant)=>{
          return (
            <Applicant key={applicant._id} applicantid={applicant._id} applicantavatar={applicant.userdetails.useravatar} applicantname={applicant.userdetails.username} applicantjob={applicant.jobdetails.jobname} applicantcontact={applicant.userdetails.userphno} applicantmail={applicant.userdetails.usermail} applicantapprovestatus={applicant.approved} applicantrejectstatus={applicant.rejected} applicantuserid={applicant.userdetails._id} />
          )
      })}
      
 
    </div>
  )
}

export default Applications