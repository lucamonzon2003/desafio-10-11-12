export const loged = (req, res, next) => {
    if(!req.session.user) {
        return res.render("pages/login", {title: "Login"})
    }
    next()
}