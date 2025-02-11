import { Task } from "../models/taskSchema.js"

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
    const task = await Task.create({title, description, createdBy});
    res.status(200).json({
        success: true,
        message: "Task created!"
    })
    
}

export const getUserTasks = async(req, res, next) => {
    const tasks = await Task.find({createdBy: req.user._id});
    if(!tasks){
        return next(
            res.status(400).json({
                success: false,
                message: "Tasks not found!"
            })
        )
    }
    res.status(200).json({
        success: true,
        tasks
    })
}

export const deleteUserTasks = async(req, res, next) => {
    const task = await Task.findById(req.params.id);
    if(!task){
        return next(
            res.status(400).json({
                success: false,
                message: "Task not Found!"
            })
        )
    }
    await task.deleteOne();
    res.status(200).json({
        success: true,
        message: "Task Deleted!"
    })
}