import mongoose from 'mongoose';

const messagesCollection = 'messages';

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String
    }
},
{timestamps: true});

export const messagesModel = mongoose.model(productsCollection, productsSchema);

//TODO message model