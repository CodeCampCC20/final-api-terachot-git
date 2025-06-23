import prisma from "../config/prisma.js";
const healthRecordsService = {} 
healthRecordsService.Create = (data) => {
     return prisma.HealthRecord.create({
        data,
    })

}

export default healthRecordsService