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
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 23
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 23
    },
    age: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    verified: {
        type: Boolean,
        default: false,
    },
});

userSchema.statics.emailTaken = async function (email) {
    const user = await this.findOne({ email });
    return !!user;
}

const User = mongoose.model('User', userSchema);
module.exports = { User }