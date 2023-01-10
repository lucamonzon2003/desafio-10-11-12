import Cmongodb from "../containers/C-mongodb";


class MessageMongo extends Cmongodb {
    constructor(){
        super();
    }
};

export default new MessageMongo();

//TODO message dao