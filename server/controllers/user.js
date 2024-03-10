import User from "../models/user.js";
import cloudinary from "../configs/cloudinary.config.js";
import bcrypt from "bcrypt";
import "dotenv/config.js";
let getAllUsers = async (req,res)=>{
    let users;
    try {
        users = await User.find();
        if(users.length===0){
            return res.status(404).json({message:"No users found ..."})
        }
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

let getUserById = async (req,res)=>{
    let {userid} = req.params;
    let user;
    try {
        user = await User.findById(userid);
        if(!user){
            return res.status(404).json({message:"No users found with this id ..."});
        }
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}

let createUser = async (req,res)=>{
    let {username,usermail,userpassword,userskills,userphno} = req.body;
    let useravatar;
    let existinguser;
    let hashedpassword;
    try {
       existinguser = await User.findOne({usermail});
       if(existinguser){
            return res.status(403).json({message:"User with this mail already found ..."});
       }
       hashedpassword = bcrypt.hashSync(userpassword,Number(process.env.SALT_ROUNDS));
       try {
            useravatar = await cloudinary.uploader.upload(req.file.path,{folder:"job-application-project/user-images"});
       } catch (error) {
            console.log(error);
       }
       let user = new User({username,usermail,userskills,userpassword:hashedpassword,userphno,useravatar:useravatar.secure_url,useravatarid:useravatar.public_id});
       if(!user){
            return res.status(404).json({message:"No User Created !!!"});
       }
       user.save();
       return res.status(200).json({message:"Sign up succesfull..."});
    } catch (error) {
        console.log(error);
    }
}

let authUser = async (req,res)=>{
    let {usermail,userpassword} = req.body;
    let existinguser;
    let valid;
    try {
        existinguser = await User.findOne({usermail});
        if(!existinguser){
            return res.status(404).json({message:"No users found with this mail ..."});
        }
        valid = bcrypt.compareSync(userpassword,existinguser.userpassword);
        if(!valid){
            return res.status(401).json({message:"Password mismatch .."});
        }
        return res.status(200).json({message:"Sign in succesfull ...",existinguser})
    } catch (error) {
        console.log(error);
    }
}

let updateUser = async (req,res)=>{
    let {userid} = req.params;
    let {username,usermail,userskills,userphno} = req.body;
   
    let useravatar;
    let existinguser;
    try {
        existinguser = await User.findById(userid);
        if(!existinguser){
            return res.status(404).json({message:"No user found with this id ..."});
        }
        try {
            await cloudinary.uploader.destroy(existinguser.useravatarid);
            useravatar = await cloudinary.uploader.upload(req.file.path,{folder:"job-application-project/user-images"});
        } catch (error) {
            console.log(error);
        }

     
        let user = await User.findByIdAndUpdate(userid,{username,usermail,userphno,userskills,useravatar:useravatar.secure_url,useravatarid:useravatar.public_id});
        if(!user){
            return res.status(404).json({message:"User not created ..."});
        }
        
        return res.status(200).json({message:"User updated ..."});
    } catch (error) {
        console.log(error);
    }
}

let deleteUser = async (req,res)=>{
    let {userid} = req.params;
    let user;
    try {
        user = await User.findById(userid);
        if(!user){
            return res.status(404).json({message:"No user with this id ..."});
        }
        await cloudinary.uploader.destroy(user.useravatarid);
        await User.findByIdAndDelete(userid);
        return res.status(200).json({message:"User deleted succesfull..."});
    } catch (error) {
        console.log(error);
    }
}

export {getAllUsers,createUser,getUserById,updateUser,authUser,deleteUser};