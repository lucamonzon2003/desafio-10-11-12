import Cmongodb from "../containers/C-mongodb.js";
import { usersModel } from "../models/user.model.js";

class UsersMongo extends Cmongodb {
    constructor(){
        super(usersModel);
    }
    async getById(email) {
        const data = await this.model.findById(email);
        if (isNil(data) || isNull(data)) throw new Error('item not found');
        return data
    }
};

export default new UsersMongo();