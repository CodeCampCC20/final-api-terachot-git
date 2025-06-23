import express from "express"
import usersController from "../controllers/usersController.js";
import authCheck from "../middlewares/authcheck.js";

const usersRouter = express.Router();

usersRouter.get("/me",authCheck.userCheck,usersController.getme)
usersRouter.patch("/me",authCheck.userCheck,usersController.updateme)





export default usersRouter