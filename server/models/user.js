const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

userSchema.pre('save', function (next) {

})

const User = mongoose.model('User', userSchema);
module.exports = { User }