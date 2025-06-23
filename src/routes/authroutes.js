import express from "express"
import authController from "../controllers/authController.js";


const authRouter = express.Router();

authRouter.post("/register/doctor",authController.Docregister)
authRouter.post("/login/doctor",authController.DocLogin)
authRouter.post("/register/user",authController.UserRegister)
authRouter.post("/login/user",authController.UserLogin)




export default authRouter