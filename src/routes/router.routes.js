import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js"
import ingredientRouter from "./ingredient.routes.js"

RouterApp.use(userRouter);
RouterApp.use(authRouter);
RouterApp.use(ingredientRouter);

export default RouterApp;