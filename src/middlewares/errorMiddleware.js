const errorMiddleware = (err,req,res,next) => {
    res.status(err.statusCode||500).json({message:err.message||"Internal server error",errors:err.errors})

}

export default errorMiddleware