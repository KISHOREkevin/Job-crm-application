import React from 'react'

const Job = ({approveid,approvename,approvesalaryfrom,approvesalaryto,approveprovider}) => {
  return (
    <div className='shadow-lg rounded-md p-5 m-3 bg-white'>
       <h2 className='font-bold text-3xl'>{approvename}</h2>
        <p>salary range : {approvesalaryfrom} - {approvesalaryto}</p>
        <a href="" className='hover:text-blue-600 hover:underline' >Number of applicants : 3000</a>
        <p>Provider : {approveprovider}</p>
    </div>
  )
}

export default Job