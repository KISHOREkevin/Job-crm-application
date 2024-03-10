import React from 'react'
import Job from './Job'
const Jobs = ({userjobs}) => {
  return (
    
   
    <div className='flex flex-wrap mt-3'>
       {userjobs.map((job)=>{
          return (
            <Job key={job._id} jobid={job._id} jobname={job.jobname} jobsalaryfrom={job.jobsalaryfrom} jobsalaryto={job.jobsalaryto} jobprovider={job.jobprovider.companyname} jobproviderid={job.jobprovider._id} />
          )
       })} 
        
       
    </div>
  
  )
}

export default Jobs