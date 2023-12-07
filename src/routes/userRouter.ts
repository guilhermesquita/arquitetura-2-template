import  express from "express";
import { UserController } from "../controller/UserController";

export const userRoutes = express.Router();
const userController = new UserController()

userRoutes.get('/', userController.getUsers)
userRoutes.post('/', userController.createUser)