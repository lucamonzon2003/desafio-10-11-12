import { Router } from "express";
const router = Router();
import AuthService from '../services/auth.service.js'

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
    res.status(200).json({
        user: req.session.user,
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
        const user = await userService.create(data);
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