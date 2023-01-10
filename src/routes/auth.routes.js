import { Router } from "express";
const router = Router();
import AuthService from '../services/auth.service.js'

import UserService from "../services/user.service.js";

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const logedIn = await AuthService.logedIn(email, password);
        if (!logedIn) {
            return res.status(401).json({
                statusCode: 401,
                error: 'email or password incorrect!',
                message: '401 Unauthorized'
            });
        }
        // req.session.user = logedIn;
        console.log(req.session) //TODO problemas con la session.user
        res.status(200).json({
            user: logedIn,
            succes: true
        })
    } catch (err) {
        next(err)
    }
})

router.get("/logout", async (req, res) => {
    try {
        
    } catch (err) {

    }
})

router.post("/register", async (req, res, next) => {
    try {
        const data = req.body;
        const user = await UserService.create(data);
        delete user.password;
        res.status(201).json({
            user,
            statusCode: 201,
            message: "Created!"
        })
    } catch (err) {
        next(err)
    }
})

export default router;