import { Router } from "express";
const router = Router();
import ProductService from '../services/products.service.js';

router.get("/", async (_req, res, next) => {
    try {
        const products = await ProductService.getAll();
        console.log(products)
        res.status(200).render("index", { products: products , title: inicio});
    } catch (err) {
        next(err);
    }
})
router.get("/login", async (req, res, next) => {
    try {
        res.status(200).render("pages/login")
    } catch (err) {
        next(err)
    }
})
router.get("/register", async (req, res, next) => {
    res.status(200).render('pages/register')
})
router.get("/newProduct", async (req, res, next) => {
    
})
router.get("/chat", async (req, res, next) => {
    
})

export default router;

