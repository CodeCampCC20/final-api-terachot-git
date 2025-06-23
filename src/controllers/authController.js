import hashService from "../services/hashService.js"
import jwtService from "../services/jwtService.js"
import authService from "../services/authService.js"
import createError from "../utils/createError.js"
const authController = {}

authController.Docregister = async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password, specialization } = req.body

        const existUser = await authService.findDoctorByUsername(username)
        if (existUser) {
            createError(400, 'alredy exist');
        }
        const hashPassword = hashService.hashPassword(password)
        const data = {
            username, password: hashPassword, specialization
        }
        console.log(data)
        const newDoctor = await authService.creatDocUser(data)
        res.status(201).json({ "message": "Register doctor Successfully" })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

authController.UserRegister = async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password } = req.body

        const existUser = await authService.findUserByUsername(username)
        if (existUser) {
            createError(400, 'alredy exist');
        }
        const hashPassword = hashService.hashPassword(password)
        const data = {
            username, password: hashPassword
        }
        console.log(data)
        const newDoctor = await authService.creatUser(data)
        res.status(201).json({ "message": "Register user Successfully" })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

authController.DocLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const existUser = await authService.findDoctorByUsername(username)
        if (!existUser) {
            createError(400, "invalid user")
        }
        const isMatchPassword =  hashService.comparePassword(password, existUser.password)
        console.log(isMatchPassword)
        if (isMatchPassword) {
            const payload = { id: existUser.id };
            const accessToken = jwtService.genDocAccessToken(payload);
            res.status(200).json({
                "id": existUser.id,
                "username": existUser.username,
                "specialization": existUser.specialization,
                "accessToken": accessToken
            })
        }
        else{
            createError(400, "Password is invalid")
        }
    }
    catch (error) {
        next(error)
    }
}

authController.UserLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const existUser = await authService.findUserByUsername(username)
        if (!existUser) {
            createError(400, "invalid user")
        }
        const isMatchPassword =  hashService.comparePassword(password, existUser.password)
        console.log(isMatchPassword)
        if (isMatchPassword) {
            const payload = { id: existUser.id };
            const accessToken = jwtService.genUserAccessToken(payload);
            res.status(200).json({
                "id": existUser.id,
                "username": existUser.username,
                "accessToken": accessToken
            })
        }
        else{
            createError(400, "Password is invalid")
        }
    }
    catch (error) {
        next(error)
    }
}






export default authController