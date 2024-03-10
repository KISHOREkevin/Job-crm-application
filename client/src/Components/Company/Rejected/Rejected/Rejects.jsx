import React from 'react'
import Reject from './Reject'
const Rejects = ({rejects}) => {
  return (
    <div className='flex flex-wrap'>
    {rejects.map((reject)=>{
      return (
          <Reject key={reject._id} rejectid={reject._id} rejectavatar={reject.userdetails.useravatar} rejectname={reject.userdetails.username} rejectjob={reject.jobdetails.jobname} rejectcontact={reject.userdetails.userphno} rejectmail={reject.userdetails.usermail} />
      )
    })}
    
    
    
  </div>
  )
}

export default Rejects