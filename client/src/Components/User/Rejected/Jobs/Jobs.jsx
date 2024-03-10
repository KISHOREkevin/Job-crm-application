import React from 'react'
import Job from './Job'
const Jobs = ({rejected}) => {
  return (
    
   
    <div className='flex flex-wrap mt-3'>
      {rejected.map((reject)=>{
        return (
            <Job key={reject._id} rejectid={reject._id} rejectname={reject.jobdetails.jobname} rejectsalaryfrom={reject.jobdetails.jobsalaryfrom} rejectsalaryto={reject.jobdetails.jobsalaryto} rejectprovider={reject.companydetails.companyname} />
        )
      })}  
        
      
    </div>
  
  )
}

export default Jobs