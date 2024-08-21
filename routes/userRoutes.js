import express from "express";
import { getUsers } from "../controllers/userController.js";


const routes = express.Router();

routes.route('/api/user').get((req, res)=>{
 getUsers(req, res);
});
export default routes;




