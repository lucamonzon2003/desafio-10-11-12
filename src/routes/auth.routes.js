import { Router } from "express";
const router = Router();
import AuthService from '../services/auth.service.js'

import UserService from "../services/user.service.js";

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const logedIn = await AuthService.login(email, password);
        if (!logedIn) {
            return res.status(401).json({
                statusCode: 401,
                error: 'email or password incorrect!',
                message: '401 Unauthorized'
            });
        }
        req.session.user = logedIn;
        res.status(200).redirect("/");
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get("/logout", async (req, res) => {
    try {
        req.session.destroy()
        res.status(200).redirect("/")
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const data = req.body;
        const user = await UserService.create(data);

        // delete user.password; //TODO no borra
        res.status(201).json({
            user,
            statusCode: 201,
            message: "Created!"
        })
        // res.status(200).redirect("/");
    } catch (err) {
        if(err.code === 11000) {
            return res.status(409).send("Ya existe una cuenta con el mismo mail")
        }
        next(err)
    }
})

export default router;