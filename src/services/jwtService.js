import jwt from "jsonwebtoken"
const jwtService = {} ;
jwtService.genDocAccessToken = (payload)=> {
    return jwt.sign(payload,process.env.DOCTERSECRET,{
        expiresIn:"1d",
        algorithm:"HS256"
    })
}

jwtService.genUserAccessToken = (payload)=> {
    return jwt.sign(payload,process.env.USERSECRET,{
        expiresIn:"1d",
        algorithm:"HS256"
    })
}

jwtService.verifyDocToken = (token) => {
    return jwt.verify(token,process.env.DOCTERSECRET,{
        expiresIn: "1d",
        algorithms:["HS256"]
    })
}

jwtService.verifyUserToken = (token) => {
    return jwt.verify(token,process.env.USERSECRET,{
        expiresIn: "1d",
        algorithms:["HS256"]
    })
}

export default jwtService