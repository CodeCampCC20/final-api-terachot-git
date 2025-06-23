import hashService from "../services/hashService.js"
import jwtService from "../services/jwtService.js"
import authService from "../services/authService.js"
import doctorService from "../services/doctorService.js"
import createError from "../utils/createError.js"
import prisma from "../config/prisma.js"

const doctorController = {}

doctorController.getme = async (req,res) =>{
    const {id} = req.user
    const existuser = await doctorService.Getme(id)
    res.json({
  "id": existuser.id,
  "username": existuser.username,
  "specialization":existuser.specialization
})

}
doctorController.updateme = async (req,res) =>{
    const {id} = req.user
    const {username,password,specialization} = req.body
    const existUser = await authService.findDoctorByUsername(username)
    if (existUser) {
            createError(400, 'User alredy exist');
    }
    const hashPassword = hashService.hashPassword(password)
    const data = {username,password:hashPassword,specialization}
    const existuser = await doctorService.Updatedoctor(id,data)
    res.json({
  "id": existuser.id,
  "username": existuser.username,
  "specialization":existuser.specialization
})

}


export default doctorController