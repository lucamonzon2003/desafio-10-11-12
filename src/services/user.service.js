import UserDao from "../daos/user.dao.js";


class UserService {
    constructor(){
        this.dao = UserDao;
    }
    async create(){
        const user = await this.UserDao.create(obj)
        return user
    }
    async getAll(){
        const users = await this.UserDao.getAll()
        return users
    }
    async getById(email){
        
    }
    async remove(){

    }

}

export default new UserService();