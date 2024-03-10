import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyname:{ type:String , required:true},
  companymailid:{type:String,required:true},
  companypassword:{type:String,required:true},
  companylocation:{type:String,required:true},
  companyphno:{type:Number,required:true},
  companyavatar:{type:String,required:true},
  companyavatarid:{type:String,required:true}
  
},{timestamps:true})

const Company = mongoose.model("Company",companySchema);

export default Company;
