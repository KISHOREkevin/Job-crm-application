import React from 'react'
import Job from './Job'
const Jobs = ({jobs}) => {
  return (
    
   
    <div className='flex flex-wrap mt-3'>
        {jobs.map((job)=>{
          return (
            <Job key={job._id} jobname={job.jobname} jobsalaryfrom={job.jobsalaryfrom} jobsalaryto={job.jobsalaryto} jobid={job._id}  />
          )
        })}
       
        
    </div>
  
  )
}

export default Jobs