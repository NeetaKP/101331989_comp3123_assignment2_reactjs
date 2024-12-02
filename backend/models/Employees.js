const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id:{
        type: mongoose.ObjectId
    },
    first_name: {
        type: String,
        maxLength: 100,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        maxLength: 50,
        trim: true
    },
    position: {
        type: String,
        maxLength: 25,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        min: [0, 'The minimum is zero.'],
        trim: true
    },
    date_of_joining: {
        type: Date,
    },
    department: {
        type: String,
        maxLength: 100,
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})

module.exports = mongoose.model('employee', employeeSchema)