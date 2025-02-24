const httpStatus = require('http-status');
const { User } = require('../models/user');
const userService = require('./user.service');

const createUser = async (email, password) => {
    try {
        if (await User.emailTaken(email)) {
            throw new Error('Email is taken');
        }

        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken()
    return token;
}

const signInWithEmailAndPassword = async (email, password) => {
    try {
        const user = await userService.findUserByEmail(email);
        //check email
        if (!user) {
            throw new Error('Bad email')
        }

        //validate password
        if (!(await user.comparePassword(password))) {
            throw new Error('Bad password');
        }

        return user;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassword
}