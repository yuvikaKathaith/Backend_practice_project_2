import express from "express"
import { config } from "dotenv"
import dBConnection from "./database/dBConnection.js";

const app = express();

config({path: './config/config.env'});

dBConnection();

export default app;