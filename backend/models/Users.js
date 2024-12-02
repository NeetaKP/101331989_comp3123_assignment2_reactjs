const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.ObjectId
    },
    username: {
        type: String,
        unique: true,
        maxLength: 100,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        maxLength: 50,
        required: true,
        trim: true
    },
    password: {
        type: String,
        maxLength: 60,
        required: true,
        trim: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})
const UserModel = mongoose.model('UserModel', userSchema) 
module.exports = UserModel