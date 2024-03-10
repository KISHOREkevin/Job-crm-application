import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import baseurl from '../../../Api/baseurl'
import { useNavigate } from 'react-router-dom'

const UserSignin = () => {
  let navigate = useNavigate();
  let [inpuData,setInputData] = useState({
    usermail:"",
    userpassword:""
  })
  let inputHandler = (e)=>{
    let {name,value} = e.target;
    setInputData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  let submitHandler = async (e)=>{
    e.preventDefault();
    try {
      let response = await axios.post(`${baseurl}/users/authenticate`,inpuData);
      let data = response.data;
      localStorage.setItem("userid",data.existinguser._id)
      navigate("/user/home");
      setTimeout(()=>{
        toast.success(data.message,{duration:1000});
      },800)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='container mx-auto flex justify-center items-center h-[100vh]'>
            <div className='shadow-lg p-10 bg-blue-100 lg:w-[50%] w-50 m-10 rounded-md'>
                <form onSubmit={submitHandler}>
                    <label htmlFor="usermail">Enter your mail:</label><br />
                    <input onChange={inputHandler} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="usermail" id="usermail" required /><br /><br />
                    <label htmlFor="userpassword">Enter the password:</label><br />
                    <input onChange={inputHandler} className='ring-1 rounded-md w-full text-xl p-1' type="password" name='userpassword' id='userpassword' required /><br /><br />
                    <button className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
                </form>

            </div>
            <Toaster />
        </div>
  )
}

export default UserSignin