import express from "express";
import { createJob, deleteJob, getAllJobs, getJobByCategory, getJobById, getJobByJobname, updateJob } from "../controllers/jobs.js";

const jobRoute = express.Router();

jobRoute.get("/",getAllJobs);
jobRoute.get("/jobs/:jobname",getJobByJobname);
jobRoute.get("/posted-jobs",getJobByCategory);
jobRoute.get("/:jobid",getJobById);
jobRoute.post("/create-job/:companyid",createJob);
jobRoute.put("/update-job/:jobid",updateJob);
jobRoute.delete("/delete-job/:jobid",deleteJob);
export default jobRoute;