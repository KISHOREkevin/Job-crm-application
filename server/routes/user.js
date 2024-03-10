import express from "express";
import UserAvatars from "../services/user.js";
import { authUser, createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.js";


const userRoute = express.Router();

userRoute.get("/",getAllUsers);
userRoute.get("/:userid",getUserById);
userRoute.post("/",UserAvatars.single("useravatar"),createUser);
userRoute.post("/authenticate",authUser);
userRoute.put("/update-user/:userid",UserAvatars.single("useravatar"),updateUser);
userRoute.delete("/delete-user/:userid",deleteUser);
export default userRoute;