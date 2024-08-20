import express, { Router } from "express";
import { getProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route('/api/products').get((req, res)=> getProducts(req, res));


export default router;