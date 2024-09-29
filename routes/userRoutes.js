import express from "express";
import { getUser } from "../controllers/userController.js";

const routes = express.Router();

routes.route('/api/user').get((req, res) => getUser(req, res));

 export default routes;