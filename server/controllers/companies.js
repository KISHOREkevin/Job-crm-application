import Company from "../models/companies.js";
import cloudinary from "../configs/cloudinary.config.js";
import bcrypt from "bcrypt";
let getAllCompanies = async (req, res) => {
    let companies;
    try {
        companies = await Company.find();
        if (companies.length === 0) {
            return res.status(404).json({ message: "No companies found ..." });
        }
        return res.status(200).json({ companies });
    } catch (error) {
        console.log(error);
    }
}

let getCompanyById = async (req,res)=>{
    let {companyid} = req.params;
    let company;
    try {
        company = await Company.findById(companyid);
        if(!company){
            return res.status(404).json({message:"No Companies found with this id ..."});
        }
        return res.status(200).json({company});
    } catch (error) {
        console.log(error);
    }
}
 
let createCompany = async (req, res) => {
    let { companyname, companymailid, companypassword, companylocation, companyphno } = req.body;
    let companyavatar;
    let hashedpassword;
    let existingmailid;

    try {
        existingmailid = await Company.findOne({ companymailid });
        if (existingmailid) {
            return res.status(403).json({ message: "Company with this mail already exists ..." });
        }
        hashedpassword = bcrypt.hashSync(companypassword, Number(process.env.SALT_ROUNDS))
        try {
            companyavatar = await cloudinary.uploader.upload(req.file.path,{folder:"job-application-project/company-images"});
        } catch (error) {
            console.log(error);
        }
        let company = new Company({ companyname, companymailid, companypassword: hashedpassword, companylocation, companyavatar:companyavatar.secure_url, companyphno,companyavatarid:companyavatar.public_id });
        if (!company) {
            return res.status(404).json({ message: "No Company Created !!!" });
        }
        company.save();
        return res.status(201).json({ message: "Signup successfull ..." });
    } catch (error) {
        console.log(error);
    }
}

let authCompany = async (req,res)=>{
    let {companymailid,companypassword} = req.body;
    let company;
    let valid;
    try {
        company = await Company.findOne({companymailid});
        if(!company){
            return res.status(404).json({message:"Company with this mail not found ..."});
        }
        valid = bcrypt.compareSync(companypassword,company.companypassword);
        if(!valid){
            return res.status(401).json({message:"Password mismatch ..."});
        }
        return res.status(200).json({company,message:"Signin Successfull ..."});
    } catch (error) {
        console.log(error);
    } 
}

let updateCompany = async (req,res)=>{
    let {companyid} = req.params;
    let {companyname,companymailid,companylocation,companyphno} = req.body;
    let companyavatar ;
  
    let company;
    try {
       company = await Company.findById(companyid);
       if(!company){
         return res.status(404).json({message:"No companies found with this id ..."});
       }
       try {
            await cloudinary.uploader.destroy(company.companyavatarid);
            companyavatar = await cloudinary.uploader.upload(req.file.path,{folder:"job-application-project/company-images"});
       } catch (error) {
            console.log(error);
       }
      
       await Company.findByIdAndUpdate(companyid,{companyname,companymailid,companylocation,companyphno,companyavatar:companyavatar.secure_url,companyavatarid:companyavatar.public_id});
       return res.status(200).json({message:"Company updated successfully ..."});
    } catch (error) {
        console.log(error);
    }

}

let deleteCompanyById = async (req,res)=>{
    let {companyid} = req.params;
    let company;
    try {
        company = await Company.findById(companyid);
        if(!company){
            return res.status(404).json({message:"No Companies found with this id ..."})
        }
        try {
            await cloudinary.uploader.destroy(company.companyavatarid);
        } catch (error) {
            console.log(error);
        }

        await Company.findByIdAndDelete(companyid);
        return res.status(200).json({message:"Company Deleted successfully ..."});
        
    } catch (error) {
        console.log(error);
    }
}

export { getAllCompanies, createCompany , getCompanyById , authCompany ,deleteCompanyById,updateCompany};
