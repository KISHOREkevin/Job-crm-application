import React from 'react'
import Job from './Job'
const Jobs = ({applied}) => {
  return (
    
   
    <div className='flex flex-wrap mt-3'>
        {applied.map((apply)=>{
            return (
              <Job key={apply._id} applyname={apply.jobdetails.jobname}  applysalaryfrom={apply.jobdetails.jobsalaryfrom} applysalaryto={apply.jobdetails.jobsalaryto} applyprovider={apply.companydetails.companyname} />
            )
        })}
        
        
    </div>
  
  )
}

export default Jobs