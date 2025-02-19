const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;

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
    var user = this;

    bcrypt.genSalt(SALT_I, function (err, salt) {
        bcrypt.hash(user.password, salt, function () {

        })
    })
})

const User = mongoose.model('User', userSchema);
module.exports = { User }