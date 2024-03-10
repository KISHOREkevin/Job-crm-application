import React from "react";
import findJobImage from "../../assets/find-job.png";
import createCompanyImage from "../../assets/create-job.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="find-job-section lg:pt-0 pt-32  lg:flex  px-10 lg:px-20">
        <div className=" my-auto">
          <p className="text-3xl font-bold mb-3 lg:w-82">
          Land your dream job, faster... <br/><br />Connect with top talent, effortlessly ...<br/><br />The smarter way to find your perfect fit.
          </p>
          <Link to="/user/sign-in">
            <button className="bg-blue-600 text-white lg:mb-0  lg:w-auto w-full px-3 py-2 mr-3 mb-3">
              Sign in
            </button>
          </Link>
          <Link to="/user/sign-up">
          <button className="border-blue-600 border-2 lg:w-auto w-full px-3 py-2">
            Sign up
          </button>
          </Link>
        </div>
        <figure>
          <img src={findJobImage} alt="find-job" width={900} />
        </figure>
      </div>
      <div className="create-job-section lg:flex lg:visible hidden lg:px-20 px-10">
        <figure>
          <img src={createCompanyImage} alt="create-company" width={1000} />
        </figure>
        <div className=" my-auto">
          <p className="text-3xl font-bold">
          Streamline your hiring process from start to finish...<br /><br />Find the perfect talent, without the hassle...<br/><br/>Attract top candidates with a powerful job platform
          </p>
          <Link to="/company/sign-up">
          <button className="bg-blue-600 text-white px-3 py-2 mr-3">
            Create Company
          </button>
          </Link>
          <Link to="/company/sign-in">
          <button className="border-blue-600 border-2 px-3 py-2">
            Go To Company
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
