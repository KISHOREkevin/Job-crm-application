import express from "express";
import { approveApplication, createApplication, deleteApplication, getAllApplications, getApplicationByCategory, getApplicationByCategoryUser, getApplicationByCompanyId, getApplicationById, getApplicationByJobId, getApplicationByUserId, rejectApplication } from "../controllers/application.js";
const applicationRoute = express.Router();

applicationRoute.get("/",getAllApplications);
applicationRoute.get("/application-by-category/:companyid",getApplicationByCategory);
applicationRoute.get("/application-by-company/:companyid",getApplicationByCompanyId);
applicationRoute.get("/application-by-job/:jobid",getApplicationByJobId);
applicationRoute.get("/application-by-category-user/:userid",getApplicationByCategoryUser);
applicationRoute.get("/application-by-user/:userid",getApplicationByUserId);
applicationRoute.get("/:applicationid",getApplicationById);
applicationRoute.post("/",createApplication);
applicationRoute.patch("/:applicationid/approve-application",approveApplication);
applicationRoute.patch("/:applicationid/reject-application",rejectApplication);
applicationRoute.delete("/delete-application/:applicationid",deleteApplication);

export default applicationRoute;
