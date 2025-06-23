import createError from "../utils/createError.js";
import jwt from "jsonwebtoken"
const authCheck = {}

authCheck.docCheck = (req,res,next) => {
    try {
        const header = req.headers.authorization;
        if(!header){
            createError(401,"Token is missing")
        }
        const token = header.split(" ")[1]
        jwt.verify(token,process.env.DOCTERSECRET,(error,decode)=>{
            if(error){
                createError(401,"Token is Invalid")
            }
            req.user = decode 
            next();
        })
    } catch (error) {
        next(error)
    }
}

authCheck.userCheck = (req,res,next) => {
    try {
        const header = req.headers.authorization;
        if(!header){
            createError(401,"Token is missing")
        }
        const token = header.split(" ")[1]
        jwt.verify(token,process.env.USERSECRET,(error,decode)=>{
            if(error){
                createError(401,"Token is Invalid")
            }
            req.user = decode 
            next();
        })
    } catch (error) {
        next(error)
    }
}




export default authCheck