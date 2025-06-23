import prisma from "../config/prisma.js";
const authService = {};
authService.findDoctorByUsername = (username) => {
    return prisma.doctor.findUnique({
        where: {
            username,
        }
    })
}

authService.creatDocUser = (data) =>{
    return prisma.doctor.create({
        data,
    })
}

authService.findUserByUsername = (username) => {
    return prisma.user.findUnique({
        where: {
            username,
        }
    })
}

authService.creatUser = (data) =>{
    return prisma.user.create({
        data,
    })
}


export default authService