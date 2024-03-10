import React, { useState } from 'react'
import axios from "axios";
import baseurl from "../../../Api/baseurl"
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
const UserSignup = () => {
  let navigate = useNavigate();
  let [username,setUsername] = useState("");
  let [usermailid,setUsermailid] = useState("");
  let [userpassword,setUserpassword] = useState("");
  let [userphno,setUserphno] = useState(0);
  let [userskills,setUserskills] = useState("");
  let [useravatar,setUseravatar] = useState("");

  let submitHandler = async (e)=>{
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("username",username);
    formdata.append("usermail",usermailid);
    formdata.append("userpassword",userpassword);
    formdata.append("userphno",userphno);
    formdata.append("userskills",userskills);
    formdata.append("useravatar",useravatar);
    try {
      let response = await axios.post(`${baseurl}/users`,formdata);
      let data = response.data;
      navigate("/user/sign-in");
      setTimeout(()=>{
        toast.success(data.message);
      },1000)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='container mx-auto flex justify-center items-center h-[100vh]'>
    <div className='shadow-lg p-10 bg-blue-100 lg:w-[50%] w-50 m-10 rounded-md'>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Enter your user name :</label><br />
            <input onChange={(e)=>setUsername(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="text" name="username" id="username" required /><br /><br />
            <label htmlFor="usermailid">Enter your mail:</label><br />
            <input onChange={(e)=>setUsermailid(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="usermailid" id="usermailid" required /><br /><br />
            <label htmlFor="userpassword">Enter the password:</label><br />
            <input onChange={(e)=>setUserpassword(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="password" name='userpassword' id='userpassword' required /><br /><br />
            <label htmlFor="userphno">Enter your contact number :</label><br />
            <input onChange={(e)=>setUserphno(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="userphno" id="userphno" required /><br /><br />
            <label htmlFor="userskills">Enter the skills acquired (enter skills comma ',' seperated) :</label><br />
            <textarea onChange={(e)=>setUserskills(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="text" name="userskills" id="userskills" required></textarea> <br /><br />
            <label htmlFor="useravatar">Upload the your avatar :</label><br />
            <input onChange={(e)=>setUseravatar(e.target.files[0])} className='ring-1 rounded-md w-full p-1' type="file" name='useravatar' id='useravatar' required /><br /><br />
            <button className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
        </form>
        <Toaster />
    </div>
</div>
  )
}

export default UserSignup