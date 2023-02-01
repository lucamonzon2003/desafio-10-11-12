export const authMiddleware = (req, res, next) => {
    if(req.isAuthenticated()){
       res.redirect('/');
    }
    next() 
}