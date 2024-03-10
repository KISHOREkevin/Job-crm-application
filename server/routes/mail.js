import express from "express";
import { sendApprovedStatus, sendCheckingStatus, sendRejectedStatus } from "../controllers/mail.js";

const mailRoute = express.Router();

mailRoute.get("/send-checking-status",sendCheckingStatus);
mailRoute.get("/send-approved-status",sendApprovedStatus);
mailRoute.get("/send-rejected-status",sendRejectedStatus);
export default mailRoute;