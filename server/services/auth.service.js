const httpStatus = require('http-status');
const { User } = require('../models/user');

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

module.exports = {
    createUser
}