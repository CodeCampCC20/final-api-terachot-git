import express from "express"
import authCheck from "../middlewares/authcheck.js";


const healthRecordsRoute = express.Router();

healthRecordsRoute.post("/",authCheck.userCheck)


export default healthRecordsRoute