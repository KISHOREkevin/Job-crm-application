import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import CompanySignup from './Components/Company/Auth/CompanySignup';
import CompanySignin from './Components/Company/Auth/CompanySignin';
import UserSignup from './Components/User/Auth/UserSignup';
import UserSignin from './Components/User/Auth/UserSignin';

import PostedJobs from './Components/Company/PostedJobs/PostedJobs';
import Profile from './Components/Company/Profile/Profile';
import Applicants from './Components/Company/Applicants/Applicants';
import Approved from './Components/Company/Approved/Approved';
import Rejected from './Components/Company/Rejected/Rejected';
import UpdateCompany from './Components/Company/Update/UpdateCompany';
import UpdateJob from './Components/Company/Update/UpdateJob';
import AddJob from './Components/Company/PostedJobs/AddJob';

import UserProfile from './Components/User/Profile/UserProfile';
import UserJobs from './Components/User/Jobs/UserJobs';
import AppliedJobs from './Components/User/Applied/AppliedJobs';
import ApprovedJobs from './Components/User/Approved/ApprovedJobs';
import RejectedJobs from './Components/User/Rejected/RejectedJobs';
import UpdateProfile from './Components/User/Update/UpdateProfile';
import CompanyJob from './Components/Jobs/CompanyJob';
import UserJob from './Components/Jobs/UserJob';
import UserCompany from './Components/Company/User/UserCompany';
import CompanyUser from './Components/User/Company/CompanyUser';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Error from './Components/Error';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* company routes */}
          <Route path='/company/sign-up' element={<CompanySignup />} />
          <Route path='/company/sign-in' element={<CompanySignin />} />
          
          <Route path='/company/home' element={<Profile />} />
          <Route path='/company/posted-jobs' element={<PostedJobs />} />
          <Route path='/company/add-job' element={<AddJob />} />
          <Route path='/company/applicants' element={<Applicants />} />
          <Route path='/company/approved' element={<Approved />} />
          <Route path='/company/rejected' element={<Rejected />} />
          <Route path='/company/update' element={<UpdateCompany />} />
          <Route path='/company/:jobid/update-job' element={<UpdateJob />} />
          <Route path='/company/user-details/:userid' element={<UserCompany />} />
          {/* user routes */}
          <Route path='/user/sign-up' element={<UserSignup/>} />
          <Route path='/user/sign-in' element={<UserSignin />} />
          <Route path='/user/home' element={<UserProfile />} />
          <Route path='/user/available-jobs' element={<UserJobs />} />
          <Route path='/user/applied-jobs' element={<AppliedJobs />} />
          <Route path='/user/approved-jobs' element={<ApprovedJobs /> } />
          <Route path='/user/rejected-jobs' element={<RejectedJobs />} />
          <Route path='/user/update-profile' element={<UpdateProfile />} />
          <Route path='/user/company-details/:companyid' element={<CompanyUser />} />
          {/* job routes */}
          <Route path='/company/job/:jobid/' element={<CompanyJob />} />
          <Route path='/user/job/:jobid/' element={<UserJob />} />

          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App