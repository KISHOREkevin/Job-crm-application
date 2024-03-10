import axios from 'axios';
import React,{useEffect, useState} from 'react'
import baseurl from '../../../Api/baseurl';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
  let navigate = useNavigate();
  let [username,setUsername] = useState("");
  let [usermailid,setUsermailid] = useState("");
  let [userphno,setUserphno] = useState(0);
  let [useravatar,setUseravatar] = useState("");
  let [userskills,setUserSkills] = useState("");
  let userid = localStorage.getItem("userid");
  useEffect(()=>{
    let fetchdata = async ()=>{
      try {
        let response = await axios.get(`${baseurl}/users/${userid}`);
      let data = response.data.user;
      setUsername(data.username);
      setUsermailid(data.usermail);
      setUserphno(data.userphno);
      setUseravatar(data.useravatar);
      setUserSkills(data.userskills);
      } catch (error) {
        console.log(error)
      }
    }

    fetchdata();
  },[])
  let submitHandler = async (e)=>{
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("username",username);
      formdata.append("usermail",usermailid);
      formdata.append("userphno",userphno);
      formdata.append("useravatar",useravatar);
      formdata.append("userskills",userskills);
      try {
        let response = await axios.put(`${baseurl}/users/update-user/${userid}`,formdata);
        let data = response.data;
        navigate("/user/home");
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
            <input onChange={(e)=>setUsername(e.target.value)} value={username} className='ring-1 rounded-md w-full text-xl p-1' type="text" name="username" id="username" required /><br /><br />
            <label htmlFor="usermail">Enter your mail:</label><br />
            <input value={usermailid} onChange={(e)=>setUsermailid(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="email" name="usermail" id="usermail" required /><br /><br />
            <label htmlFor="userphno">Enter your contact number :</label><br />
            <input value={userphno} onChange={(e)=>setUserphno(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="userphno" id="userphno" required /><br /><br />
            <label htmlFor="userskills">Enter the skills :</label><br />
            <textarea value={userskills} onChange={(e)=>setUserSkills(e.target.value)} className='ring-1 rounded-md w-full text-xl p-1' type="number" name="userphno" id="userphno" required ></textarea><br /><br />
            <label htmlFor="useravatar">Upload the your avatar :</label><br />
            <input onChange={(e)=>setUseravatar(e.target.files[0])} className='ring-1 rounded-md w-full p-1' type="file" name='useravatar' id='useravatar' required /><br /><br />
            <button className='bg-blue-600 text-center p-3 text-white rounded-md w-full'>Submit</button>
        </form>
    </div>
    <Toaster />
</div>
  )
}

export default UpdateProfile