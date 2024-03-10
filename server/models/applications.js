import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    userdetails:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    companydetails:{type:mongoose.Schema.Types.ObjectId,ref:"Company",required:true},
    jobdetails:{type:mongoose.Schema.Types.ObjectId,ref:"Job",required:true},
    approved:{type:Boolean,default:false},
    rejected:{type:Boolean,default:false}
},{timestamps:true});

const Application = mongoose.model("Application",applicationSchema);

export default Application;