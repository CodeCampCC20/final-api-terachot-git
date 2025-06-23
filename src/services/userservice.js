import prisma from "../config/prisma.js";
const userService = {}
userService.Updateuser = async (id,data) =>{
    const  user = await prisma.user.update({
        where:{id:Number(id)},data
    })
    return user
}

export default userService

userService.Getme = async (id) =>{
   const user = await prisma.user.findFirst({where:
        {id:Number(id)},
    omit:{password:true} } )
  return user
} 