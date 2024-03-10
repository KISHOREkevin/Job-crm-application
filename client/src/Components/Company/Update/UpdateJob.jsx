import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import baseurl from '../../../Api/baseurl';
import toast, { Toaster } from 'react-hot-toast';

const UpdateJob = () => {
    let navigate = useNavigate();
    let [inputData,setInputData] = useState({
        jobname:"",
        jobrequirements:"",
        jobsalaryfrom:0,
        jobsalaryto:0
    })
    let {jobid} = useParams();
    useEffect(()=>{
        let fetchData = async ()=>{
            try {
                let response = await axios.get(`${baseurl}/jobs/${jobid}`);
                let data = response.data.job;
                setInputData({
                    jobname:data.jobname,
                    jobrequirements:data.jobrequirements,
                    jobsalaryfrom:data.jobsalaryfrom,
                    jobsalaryto:data.jobsalaryto
                })
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    },[])
    let inputHandler = (e)=>{
        let {name,value}= e.target;
        setInputData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    let submitHandler = async (e)=>{
        e.preventDefault();
        try {
            let response = await axios.put(`${baseurl}/jobs/update-job/${jobid}`,inputData);
            let data = response.data;
            navigate("/company/posted-jobs");
            setTimeout(()=>{
                toast.success(data.message);
            },1000)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-[100vh]'>
            <div className='shadow-lg p-10 bg-blue-100 w-[50%] m-10 rounded-md'>
                <form onSubmit={submitHandler}>
                    <label htmlFor="jobname">Enter the job name:</label><br />
                    <input onChange={inputHandler} value={inputData.jobname} className='ring-1 rounded-md w-full text-xl p-1' type="text" name="jobname" id="jobname" required /><br /><br />
                    <label htmlFor="jobrequirements" >Enter the requirements:</label><br />
                    <textarea onChange={inputHandler} value={inputData.jobrequirements} className='ring-1 rounded-md w-full text-xl p-1' type="password" name='jobrequirements' id='jobrequirements' required ></textarea><br /><br />
                    <span className='text-center block'>Enter the salary range </span>
                    <div className='flex space-x-2 p-2'>
                        <div>
                            <label htmlFor="jobsalaryfrom">From :</label><br />
                            <input onChange={inputHandler} value={inputData.jobsalaryfrom} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="jobsalaryfrom" id="jobsalaryfrom" required />
                        </div>
                        <div>
                            <label htmlFor="jobsalaryto">To :</label><br />
                            <input onChange={inputHandler} value={inputData.jobsalaryto} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="jobsalaryto" id="jobsalaryto" required />
                        </div>
                    </div>
                    <button className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
                </form>
                <Toaster />
            </div>
        </div>
    )
}

export default UpdateJob