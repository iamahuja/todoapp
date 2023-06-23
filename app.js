import express from "express";

import userRouter from "./routes/user.js";

import {config} from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
config({
    path:"./data/config.env",
});

export const app = express();


// using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))


// using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",router)

app.get("/", (req,res)=>{
    res.send("Nice working");
})

// using Error Middleware
app.use(errorMiddleware);





