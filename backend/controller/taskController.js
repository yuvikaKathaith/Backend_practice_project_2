import mongoose from "mongoose"

export const createTask = async(req, res, next) => {
    const { title, description } = req.body;
    const createdBy = req.user._id;

    if(!title || !description){
        return next(
            res.status(400).json({
                success: false,
                message: "Title and description is necessary for a task!"
            })
        )
    }
    
    
}