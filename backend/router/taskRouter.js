import express from "express"
import { createTask, deleteUserTask, getUserTask, updateTask } from "../controller/taskController.js"
import isAuthenticated from "../middleware/auth.js"

const taskRouter = express.Router();

taskRouter.post('/addTask', isAuthenticated, createTask);
taskRouter.get('/myTasks', isAuthenticated, getUserTask);
taskRouter.delete('/delete/:id', isAuthenticated, deleteUserTask);
taskRouter.put('/update/:id', isAuthenticated, updateTask);

export default taskRouter;