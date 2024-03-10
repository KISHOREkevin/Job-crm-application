import React from 'react'

const Job = ({rejectname,rejectsalaryfrom,rejectsalaryto,rejectprovider}) => {
  return (
    <div className='shadow-lg rounded-md p-5 m-3 bg-white'>
        <h2 className='font-bold text-3xl'>{rejectname}</h2>
        <p>salary range : {rejectsalaryfrom} - {rejectsalaryto}</p>
        <a href="" className='hover:text-blue-600 hover:underline' >Number of applicants : 3000</a>
        <p>Provider : {rejectprovider}</p>

    </div>
  )
}

export default Job