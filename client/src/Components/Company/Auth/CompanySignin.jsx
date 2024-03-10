import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import baseurl from '../../../Api/baseurl.js'
import { useNavigate } from 'react-router-dom'
const CompanySignin = () => {
    let navigate = useNavigate();
    let [inputData,setInputData] = useState({
        companymailid:"",
        companypassword:""
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
            let response = await axios.post(`${baseurl}/companies/authenticate`,inputData);
            
            localStorage.setItem("companyid",response.data.company._id);
            localStorage.setItem("companymail",response.data.company.companymailid);
            navigate("/company/home");
            setTimeout(()=>{
                toast.success(response.data.message);
            },1000)
           
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-[100vh]'>
            <div className='shadow-lg p-10 bg-blue-100 w-[50%] m-10 rounded-md'>
                <form onSubmit={submitHandler}>
                    <label htmlFor="companymailid">Enter the company mail:</label><br />
                    <input onChange={inputHandler} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="companymailid" id="companymailid" required /><br /><br />
                    <label htmlFor="companypassword">Enter the password:</label><br />
                    <input onChange={inputHandler} className='ring-1 rounded-md w-full text-xl p-1' type="password" name='companypassword' id='companypassword' required /><br /><br />
                    <button type='submit' className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default CompanySignin