// import bcrypt from '';
import UserService from './user.service.js';


class AuthService {
    constructor(){
    }
    async login(email, password){
        const user = await UserService.getById(email);
        if(!user) return false;
        // const isValidPassword = await bcrypt.compare(password, user.password);
        // if(!isValidPassword) return false;
        delete user.password;
        return user;
    }
    // async register(){

    // }

}

export default new AuthService();