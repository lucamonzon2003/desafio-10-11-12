import UserDao from "../daos/user.dao.js";
// import usersDto from '../dto/users.dto.js';

class UserService {
    constructor(){
        this.dao = UserDao;
    }
    async create(newUser){
        const user = await this.dao.create(newUser);
        return user;
    }
    async getAll(){
        const users = await this.dao.getAll();
        return users;
    }
    async getById(email){
        const user = await this.dao.getById(email);
        return user;
    }
    async remove(email){
        await this.dao.remove(email);
    }

}

export default new UserService();