import { Router } from "express";
const router = Router();
import ProductService from '../services/products.service.js';
import MockService from '../services/mock.service.js';
import { loged } from "../middlewares/loged.js";

router.get("/", async (req, res, next) => {
    try {
        const products = await ProductService.getAll();
        res.status(200).render("index", { products: products , title: "Inicio", loged: req.session.user});
    } catch (err) {
        next(err);
    }
})
router.get("/login", async (req, res, next) => {
    try {
        res.status(200).render("pages/login", {title: "Login", loged: req.session.user});
    } catch (err) {
        next(err)
    }
})
router.get("/register", async (req, res, next) => {
    res.status(200).render('pages/register', {title: "Register", loged: req.session.user})
})
router.get("/newProduct", async (req, res, next) => {
    
})
router.get("/chat", async (req, res, next) => {
    
})
router.get("/mock", async (_req, res, next) => {
    try {
        await ProductService.create(MockService.generateProductMock());
        res.status(200).send("OK!");
    } catch (err) {
        next(err);
    }
})
export default router;

