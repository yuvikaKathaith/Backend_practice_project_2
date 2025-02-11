import express from "express"
import { createTask, deleteUserTasks, getUserTasks } from "../controller/taskController.js"
import isAuthenticated from "../middleware/auth.js"

const taskRouter = express.Router();

taskRouter.post('/addTask', isAuthenticated, createTask);
taskRouter.get('/myTasks', isAuthenticated, getUserTasks);
taskRouter.delete('/delete/:id', isAuthenticated, deleteUserTasks)

export default taskRouter;