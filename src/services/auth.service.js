import bcrypt from 'bcrypt';
import UserService from '../services/user.service.js';

class AuthService {
    constructor() {
    }
    async login(email, password) {
        try {
            const data = await UserService.getById(email);
            if (!data) return false;
            const user = data[0]
            await bcrypt.compare(password, user.password).then(function(result) {
                if(!result) return false;
            });
            return user
            // delete user.password; //TODO no borra
        } catch (err) {
            console.info(err)
        }
    }
    async register(){
    }

}

export default new AuthService();
