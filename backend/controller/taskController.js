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

export const getUserTask = async(req, res, next) => {
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

export const deleteUserTask = async(req, res, next) => {
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

export const updateTask = async(req, res, next) => {
    let task = await Task.find(req.params._id);
    if(!task){
        return next(
            res.status(400).json({
                success: false,
                message: "Task Not Found!"
            })
        )
    }
    const { title, description } = req.body;
    task = await Task.findByIdAndUpdate(
        req.params.id, 
        { title, description },
        {
            new: true,
            runValidators: true,
        }
    )
    res.status(200).json({
        success: true, 
        message: "Task Updated!",
        task
    })
}   