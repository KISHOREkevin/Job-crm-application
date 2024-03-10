import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import companyRoute from "./routes/companies.js";
import jobRoute from "./routes/jobs.js";
import userRoute from "./routes/user.js";
import applicationRoute from "./routes/applications.js";
import mailRoute from "./routes/mail.js";
const app=express();
mongoose.connect(String(process.env.MONGO_URL))
.then(app.listen(process.env.PORT,()=>console.log("Server and Database are initiated ...")))
.catch((err)=>{if (err) throw err});
app.use(cors());
app.use(express.json());

app.use("/uploads/Companies",express.static("uploads/Companies/"));
app.use("/api/companies",companyRoute);
app.use("/api/jobs",jobRoute);
app.use("/api/users",userRoute);
app.use("/api/applications",applicationRoute);
app.use("/api/email",mailRoute);