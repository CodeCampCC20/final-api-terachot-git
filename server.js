import express from "express"
import errorMiddleware from "./src/middlewares/errorMiddleware.js";
import authRouter from "./src/routes/authroutes.js";
import usersRouter from "./src/routes/usersroutes.js";
import doctorRouter from "./src/routes/doctorroutes.js";
import healthRecordsRoute from "./src/routes/health-recordsroutes.js";
const app = express();
const PORT = 7777 
app.use(express.json())
app.use("/auth",authRouter)
app.use("/users",usersRouter)
app.use("/doctors",doctorRouter)
app.use("/health-records",healthRecordsRoute)
app.use(errorMiddleware)
app.listen(PORT,()=>console.log(`server is runnin on http://localhost:${PORT}`))