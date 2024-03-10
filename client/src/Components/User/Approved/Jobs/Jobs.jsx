import React from 'react'
import Job from './Job'
const Jobs = ({approved}) => {
  return (
    
   
    <div className='flex flex-wrap mt-3'>
        {approved.map((approve)=>{
            return (
              <Job key={approve._id} approveid={approve._id} approvename={approve.jobdetails.jobname} approvesalaryfrom={approve.jobdetails.jobsalaryfrom} approvesalaryto={approve.jobdetails.jobsalaryto} approveprovider={approve.companydetails.companyname} />
            )
        })}
        
        
    </div>
  
  )
}

export default Jobs