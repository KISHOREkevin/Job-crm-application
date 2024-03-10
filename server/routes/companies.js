import express from "express";
import CompanyAvatars from "../services/companies.js";
import { authCompany, createCompany, deleteCompanyById, getAllCompanies, getCompanyById, updateCompany } from "../controllers/companies.js";
const companyRoute = express.Router();

companyRoute.get("/",getAllCompanies);
companyRoute.get("/:companyid",getCompanyById);
companyRoute.post("/",CompanyAvatars.single("companyavatar"),createCompany);
companyRoute.post("/authenticate",authCompany);
companyRoute.put("/update-company/:companyid",CompanyAvatars.single("companyavatar"),updateCompany);
companyRoute.delete("/delete-company/:companyid",deleteCompanyById);
export default companyRoute;