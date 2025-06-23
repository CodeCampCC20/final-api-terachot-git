const notFoundMiddle = (req,res) => {
    res.status(404).json ({message:`not found path: ${req.method} ${req.usl}`})
}

export default notFoundMiddle