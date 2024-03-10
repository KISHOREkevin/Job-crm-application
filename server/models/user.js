import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    usermail:{type:String,required:true},
    userpassword:{type:String,required:true},
    userskills:{type:String,required:true},
    userphno:{type:Number,required:true},
    useravatar:{type:String,required:true},
    useravatarid:{type:String,required:true}
})

const User = mongoose.model("User",userSchema);

export default User;