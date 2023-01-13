import { Router } from "express";
const router = Router();

//controllers
import { logout, register, login } from "../controllers/auth.controller.js";

router.post("/login", async (req, res, next) => {
    login(req, res, next);
})

router.get("/logout", async (req, res, next) => {
    logout(req, res, next);
})

router.post("/register", async (req, res, next) => {
    register(req, res, next);
})

export default router;