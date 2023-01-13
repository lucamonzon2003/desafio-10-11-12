import authService from '../services/auth.service.js'
import userService from "../services/user.service.js";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const logedIn = await authService.login(email, password);
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
        next(err)
    }
}

export const register = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await userService.create(data);
        // delete user.password; //TODO no borra
        res.status(201).redirect("/");
    } catch (err) {
        console.log(err)
        if(err.code === 11000) {
            return res.status(409).send("Ya existe una cuenta con el mismo mail")
        }
        next(err)
    }
}

export const logout = async (req, res, next) => {
    try {
        if (req.session.user) {
            req.session.destroy();
          }
        return res.redirect("/");
    } catch (err) {
        next(err)
    }
}
