const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    },
    token: {
        type: String
    }
});

userSchema.pre('save', function (next) { // da ne se pravi arrow zaradi skopa
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(SALT_I, function (err, salt) {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) cb(err);
        cb(null, isMatch);
    })
};

userSchema.methods.generateToken = async function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'superSecretPass');
    user.token = token;

    try {
        await user.save();
        cb(null, user);
    } catch (err) {
        if (err) return cb(err);
    }
};

userSchema.static.findByToken = function (token, cb) {
    const user = this;
    jwt.verify(token, 'superSecretPass', async (err, decode) => {

    })
};

const User = mongoose.model('User', userSchema);
module.exports = { User }