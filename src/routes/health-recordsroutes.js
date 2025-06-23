import express from "express"
import authCheck from "../middlewares/authcheck.js";
import healthController from "../controllers/health-recordsController.js";


const healthRecordsRoute = express.Router();

healthRecordsRoute.post("/",authCheck.userCheck,healthController.creatRecord)


export default healthRecordsRoute