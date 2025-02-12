import express from "express"
import { config } from "dotenv"
import dBConnection from "./database/dBConnection.js";
import userRouter from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import taskRouter from "./router/taskRouter.js";

const app = express();

config({path: './config/config.env'});

//backend frontend connection 
app.cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true
})

// to access cookies
app.use(cookieParser());
// They make req.body accessible when handling API requests. Without them, Express won’t understand the request body properly.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/task', taskRouter);

dBConnection();

export default app;