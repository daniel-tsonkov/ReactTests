const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {},
    role: {},
    firstname: {},
    lastname: {},
    age: {},
    date: {},
    verified: {},
});

const User = mongoose.model('User', userSchema);
module.exports = { User }