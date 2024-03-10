import Job from "../models/jobs.js";

let getAllJobs = async (req,res)=>{
    let jobs;
    try {
        jobs = await Job.find().populate("jobprovider");
        if(jobs.length===0){
            return res.status(404).json({message:"No jobs found ..."});
        }
        return res.status(200).json({jobs});
    } catch (error) {
        console.log(error);
    }
}

let getJobById = async (req,res)=>{
    let {jobid} = req.params;
    let job;
    try {
        job = await Job.findById(jobid).populate("jobprovider");
        if(!job){
            return res.status(404).json({message:"No job found with this id ..."});
        }
        return res.status(200).json({job});
    } catch (error) {
        console.log(error);
    }
}

let getJobByCategory = async (req,res)=>{
    let {companyid} = req.query;
    let jobs;
    try {
        jobs = await Job.find({jobprovider:companyid}).populate("jobprovider");
        if(jobs.length === 0){
            return res.status(404).json({message:"No jobs posted ..."});
        }
        return res.status(200).json({jobs});
    } catch (error) {
        console.log(error);
    } 
}
let getJobByJobname = async (req,res)=>{
   
    let {jobname} = req.params;
    let jobs;
    try {
       
        jobs = await Job.find({jobname:jobname}).populate("jobprovider");
        if(jobs.length === 0){
            return res.status(404).json({message:"No jobs found ..."});
        }

        return res.status(200).json({jobs});

    } catch (error) {
        console.log(error);
    }
}

let createJob = async (req,res)=>{
    let {companyid} = req.params;
    let {jobname,jobrequirements,jobsalaryfrom,jobsalaryto} = req.body;
    try {
        let job = new Job({jobname,jobrequirements,jobsalaryfrom,jobsalaryto,jobprovider:companyid});
        if(!job){
            return res.status(404).json({message:"No job created ..."});
        }
        job.save();
        return res.status(201).json({message:"Job created successfully ..."});
    } catch (error) {
        console.log(error);
    }
}

let updateJob = async (req,res)=>{
    let {jobid} = req.params;
    let job;
    let {jobname,jobrequirements,jobsalaryfrom,jobsalaryto} = req.body;
    try {
        job = await Job.findByIdAndUpdate(jobid,{jobname,jobrequirements,jobsalaryfrom,jobsalaryto});
        if(!job){
            return res.status(404).json({message:"No job found with this id ..."});
        }
        return res.status(200).json({message:"Job updated successfully ..."});
    } catch (error) {
        console.log(error);
    }
}

let deleteJob = async (req,res)=>{
    let {jobid} = req.params;
    let job;
    try {
        job = await Job.findByIdAndDelete(jobid);
        if(!job){
            return res.status(404).json({message:"No job found with this id ..."});
        }
        return res.status(200).json({message:"Job deleted successfully ..."});
    } catch (error) {
        console.log(error);
    }
}

export {getAllJobs,createJob,getJobByJobname,getJobByCategory,getJobById,updateJob,deleteJob};