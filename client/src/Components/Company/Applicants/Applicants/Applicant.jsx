import axios from "axios";
import React from "react";
import baseurl from "../../../../Api/baseurl";
import toast from "react-hot-toast"
const Applicant = ({ applicantid,applicantuserid, applicantname, applicantavatar, applicantjob, applicantcontact, applicantmail ,applicantapprovestatus,applicantrejectstatus}) => {
  let companymail = localStorage.getItem("companymail");
  let approvemailhandler = async (applicantmail,companymail)=>{
    try {
       let response = await axios.get(`${baseurl}/email/send-approved-status?fromemailid=${companymail}&toemailid=${applicantmail}`);
       console.log(response);
    } catch (error) {
       console.log(error);
    }
  }
  let rejectmailhandler = async (applicantmail,companymail)=>{
      try {
        let response = await axios.get(`${baseurl}/email/send-rejected-status?fromemailid=${companymail}&toemailid=${applicantmail}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  }

  let approveButtonHandler = async (applicantid,applicantmail,companymail) => {
    try {
     
      let response = await axios.patch(`${baseurl}/applications/${applicantid}/approve-application`);
    
    
      let data = response.data;
      approvemailhandler(applicantmail,companymail);
      setTimeout(() => {
        toast.success(data.message)
      }, 1000)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  let rejectButtonHandler = async (applicantid,applicantmail,companymail) => {
    try {
      let response = await axios.patch(`${baseurl}/applications/${applicantid}/reject-application`);
      
      let data = response.data;
      rejectmailhandler(applicantmail,companymail);
      setTimeout(() => {
        toast.success(data.message)
      }, 1000)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
 
  return (
    <div className="flex p-3 m-3 bg-white shadow-lg rounded-md items-center space-x-10 w-full">
      <figure className="w-52">
        <img
          src={applicantavatar}
          alt={applicantname}
        />
      </figure>
      <div  >
        <span >
        <a  href={`/company/user-details/${applicantuserid}`}><h2  className="font-bold text-3xl">{applicantname}</h2></a></span>
        <p className="text-2xl">Applied for {applicantjob}</p>
        <p>Contact number : {applicantcontact}</p>
        <p>Mail ID : {applicantmail}</p>
        <div className="space-x-3 mt-3">
          {applicantapprovestatus === false && applicantrejectstatus === false ? 
            <>
            <span onClick={() => approveButtonHandler(applicantid,applicantmail,companymail)} >
            <button className="bg-blue-600 text-white p-2">Approve</button>
            </span>
              
          <button onClick={() => rejectButtonHandler(applicantid,applicantmail,companymail)} className="bg-red-600 text-white p-2">Reject</button>
            </>
          :
          <>
          <button onClick={() => approveButtonHandler(applicantid,applicantmail)} className="bg-gray-600 text-white p-2 " disabled>Approve</button>
          <button onClick={() => rejectButtonHandler(applicantid)} className="bg-gray-600 text-white p-2" disabled>Reject</button>
          </>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Applicant;
