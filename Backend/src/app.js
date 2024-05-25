import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

import  {LIMIT_DATA}  from "./constant.js";

const app = express();

app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: LIMIT_DATA }));

app.use(express.urlencoded({ extended: true, limit: LIMIT_DATA }));

app.use(express.static("public"));

app.use(cookieparser());



// import all routes

import userRouter from "./routes/user.route.js"

import healthRouter from "./routes/healthcheck.route.js"

import ngoRouter from "./routes/ngo.route.js"

import postRouter from "./routes/post.route.js"


//all routes declaration

app.use("/api/v1/users",userRouter);

app.use("/api/v1/healthcheck",healthRouter);

app.use("/api/v1/ngo",ngoRouter);

app.use("/api/v1/post",postRouter);

export { app};