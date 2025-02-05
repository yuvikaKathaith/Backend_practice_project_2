import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Todo title is required."],
        minLength: [3, "Title must contain at least 3 characters."],
    },
    description: {
        type: String,
        required: [true, "Todo must have a description."],
        minLength: [2, "Todo description must contain minimum 2 characters."]
    }
})

export const Todo = mongoose.model("Todo", todoSchema);