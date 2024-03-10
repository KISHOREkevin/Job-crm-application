import React from 'react'
import errorImg from "../assets/404.jpg"
const Error = () => {
  return (
    <div className='bg-blue-300  flex justify-center items-center h-[100vh] overflow-y-scroll'>
        <div className='bg-white p-3 rounded-md '>
                <figure>
                    <img src={errorImg} alt="404" width={400} />
                </figure>
                <p className='text-xl font-bold text-center'>Page not found ...</p>
        </div>
    </div>
  )
}

export default Error