import express from "express";
import { getAllUsers, loginUsers } from "../controllers/userController.js";

const routes = express.Router();

routes.route('/').get(getAllUsers);
routes.route('/login').post(loginUsers);

export default routes;




