import Application from "../models/applications.js";

const getAllApplications = async (req,res)=>{
    let applications;
    try {
        applications = await Application.find().populate(["companydetails","jobdetails","userdetails"]);
        if(applications.length === 0){
            return res.status(404).json({message:"No applications found ..."});
        }
        return res.status(200).json({applications});
    } catch (error) {
        console.log(error);
    }
}

const getApplicationById = async (req,res)=>{
    let {applicationid} = req.params;
    let application;
    try {
        application = await Application.findById(applicationid);
        if(!application){
            return res.status(404).json({message:"No application found with this id ..."});
        }
        return res.status(200).json({application});
    } catch (error) {
        console.log(error);
    }
}

const getApplicationByCategory= async (req,res)=>{
    let approvedapplications;
    let rejectedapplications;
    let {approved,rejected} = req.query;
    let {companyid} = req.params;
    try {
        approvedapplications = await Application.find({approved,companydetails:companyid}).populate(["userdetails","jobdetails"]);
        rejectedapplications = await Application.find({rejected,companydetails:companyid}).populate(["userdetails","jobdetails"]);
       
        return res.status(200).json({approvedapplications,rejectedapplications});
    } catch (error) {
        console.log(error);
    }
}
const getApplicationByCategoryUser= async (req,res)=>{
    let approvedapplications;
    let rejectedapplications;
    let {approved,rejected} = req.query;
    let {userid} = req.params;
    try {
        approvedapplications = await Application.find({approved,userdetails:userid}).populate(["companydetails","jobdetails"]);
        rejectedapplications = await Application.find({rejected,userdetails:userid}).populate(["companydetails","jobdetails"]);
        
        return res.status(200).json({approvedapplications,rejectedapplications});
    } catch (error) {
        console.log(error);
    }
}


const getApplicationByCompanyId = async (req,res)=>{
    let {companyid} = req.params;
    let applications;
    try {
        applications = await Application.find({companydetails:companyid}).populate(["userdetails","jobdetails"]);
        if(applications.length === 0){
            return res.status(404).json({message:"No applications found ..."});
        }
        return res.status(200).json({applications});
    } catch (error) {
        console.log(error);
    }
}

const getApplicationByUserId = async (req,res)=>{
    let {userid} = req.params;
    let applications;
    try {
        applications = await Application.find({userdetails:userid}).populate(["companydetails","jobdetails"]);
        if(applications.length === 0){
            return res.status(404).json({message:"No applications found ..."});
        }
        return res.status(200).json({applications});
    } catch (error) {
        console.log(error);
    }
}

const getApplicationByJobId  = async (req,res)=>{
    let {jobid} = req.params;
    let applications;
    try {
        applications = await Application.find({jobdetails:jobid});
        if(applications.length === 0){
            return res.status(404).json({message:"No application found with this job id ..."})
        }
        return res.status(200).json({applications});
    } catch (error) {
        console.log(error);
    }
}

const createApplication = async (req,res)=>{
    let {userid,companyid,jobid} = req.query;
    try {
        let application = new Application({userdetails:userid,companydetails:companyid,jobdetails:jobid});
        if(!application){
            return res.status(404).json({message:"No application created ..."});
        }
        application.save();
        return res.status(200).json({message:"Application created ..."});
    } catch (error) {
        console.log(error);
    }
}

const approveApplication = async (req,res)=>{
    let {applicationid} = req.params;
    let application;
    try {
        application = await Application.findByIdAndUpdate(applicationid,{approved:true,rejected:false});
        if(!application){
            return res.status(404).json({message:"No application found with this id ..."});
        }
        return res.status(200).json({message:"Application approved ..."});
    } catch (error) {
        console.log(error);
    }
}
const rejectApplication = async (req,res)=>{
    let {applicationid} = req.params;
    let application;
    try {
        application = await Application.findByIdAndUpdate(applicationid,{approved:false,rejected:true});
        if(!application){
            return res.status(404).json({message:"No application found with this id ..."});
        }
        return res.status(200).json({message:"Application rejected ..."});
    } catch (error) {
        console.log(error);
    }
}


const deleteApplication = async (req,res)=>{
    let {applicationid} = req.params;
    let application;
    try {
        application = await Application.findByIdAndDelete(applicationid);
        if(!application){
            return res.status(404).json({message:"No application found with this id ..."});
        }
        return res.status(200).json({message:"Application deleted successfull ..."});
    } catch (error) {
        console.log(error);
    }
}

export {getAllApplications,getApplicationByJobId,getApplicationByUserId,getApplicationByCompanyId,createApplication,getApplicationById,deleteApplication,getApplicationByCategory,getApplicationByCategoryUser,approveApplication,rejectApplication};