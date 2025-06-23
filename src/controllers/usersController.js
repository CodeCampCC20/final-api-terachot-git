import hashService from "../services/hashService.js"
import jwtService from "../services/jwtService.js"
import authService from "../services/authService.js"
import userService from "../services/userservice.js"
import createError from "../utils/createError.js"
import prisma from "../config/prisma.js"

const usersController = {}

usersController.getme = async (req,res) =>{
    const {id} = req.user
    const existuser = await userService.Getme(id)
    res.json({
  "id": existuser.id,
  "username": existuser.username
})

}
usersController.updateme = async (req,res) =>{
    const {id} = req.user
    const {username,password} = req.body
    const existUser = await authService.findUserByUsername(username)
    if (existUser) {
            createError(400, 'User alredy exist');
    }
    const hashPassword = hashService.hashPassword(password)
    const data = {username,password:hashPassword}
    const existuser = await userService.Updateuser(id,data)
    res.json({
  "id": existuser.id,
  "username": existuser.username
})

}


export default usersController