import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export const usersModel = mongoose.model(usersCollection, usersSchema);