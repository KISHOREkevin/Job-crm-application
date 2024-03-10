import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobname:{type:String,required:true},
    jobrequirements:{type:String,required:true},
    jobsalaryfrom:{type:Number,required:true},
    jobsalaryto:{type:Number,required:true},
    jobprovider:{type:mongoose.Schema.Types.ObjectId,ref:"Company"}
},{timestamps:true});

const Job = mongoose.model("Job",jobSchema);

export default Job;