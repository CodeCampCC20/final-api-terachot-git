import express from "express"
import doctorController from "../controllers/doctorController.js";
import authCheck from "../middlewares/authcheck.js";

const doctorRouter = express.Router();

doctorRouter.get("/me",authCheck.docCheck,doctorController.getme)
doctorRouter.patch("/me",authCheck.docCheck,doctorController.updateme)





export default doctorRouter