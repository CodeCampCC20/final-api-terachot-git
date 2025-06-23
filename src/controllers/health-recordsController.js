import createError from "../utils/createError.js";
import healthRecordsService from "../services/health-recordsService.js";

const healthController = {}
healthController.creatRecord = async (req, res, next) => {
    try {
        const { id } = req.user
        const { type, value } = req.body
        const data = { type, value, userId: id }
        await healthRecordsService.Create(data);
        res.json({
            "message": "create health record successfully"
        })
    } catch (error) {
        next(error)
    }



}

export default healthController