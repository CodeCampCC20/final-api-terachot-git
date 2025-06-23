import prisma from "../config/prisma.js";
const doctorService = {}
doctorService.Updatedoctor = async (id,data) =>{
    const  user = await prisma.doctor.update({
        where:{id:Number(id)},data
    })
    return user
}



doctorService.Getme = async (id) =>{
   const user = await prisma.doctor.findFirst({where:
        {id:Number(id)},
    omit:{password:true} } )
  return user
} 

export default doctorService