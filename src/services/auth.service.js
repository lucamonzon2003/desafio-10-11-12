import bcrypt from 'bcrypt';
import UserService from '../services/user.service.js';

class AuthService {
    constructor() {
    }
    async login(email, password) {
        try {
            const user = await UserService.getById(email);
            if (!user) return false;
            const isValidPassword = await bcrypt.compare(password, user[0].password);
            if(!isValidPassword) return false;
            // delete user.password; //TODO no borra
            return user;
        } catch (err) {
            console.info(err)
        }
    }
    async register(){
    }

}

export default new AuthService();
