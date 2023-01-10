// import bcrypt from '';
import UserService from './user.service.js';


class AuthService {
    constructor() {
    }
    async logedIn(email, password) {
        try {
            const user = await UserService.getById(email);
            if (!user) return false;
            // const isValidPassword = await bcrypt.compare(password, user.password);
            // if(!isValidPassword) return false;
            // delete user.password; //TODO no borra
            return user;
        } catch (err) {
            console.log(err)
        }
    }
    // async register(){

    // }

}

export default new AuthService();

//TODO bcrypt
//TODO register