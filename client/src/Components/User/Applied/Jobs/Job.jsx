import React from 'react'

const Job = ({applyname,applysalaryfrom,applysalaryto,applyprovider}) => {
  return (
    <div className='shadow-lg rounded-md p-5 m-3 w-80 bg-white'>
        <h2 className='font-bold text-3xl'>{applyname}</h2>
        <p>salary range : {applysalaryfrom} - {applysalaryto}</p>
        
        <p>Provider : {applyprovider}</p>
    </div>
  )
}

export default Job