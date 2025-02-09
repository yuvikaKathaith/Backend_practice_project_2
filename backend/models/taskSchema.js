import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

export const Task = mongoose.model("Task", taskSchema);