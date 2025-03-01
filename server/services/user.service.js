//const { updateUserEmail } = require('../controllers/user.controller');
const { ApiError } = require('../middleware/apiError');
const { User } = require('../models/user');
const httpStatus = require('http-status');

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

const findUserById = async (_id) => {
    return await User.findById({ _id });
}

const updateUserProfile = async (req) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
                "$set": {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age
                }
            },
            { new: true }
        );

        if (!user) {
            throw new ApiError(httpStatus.NOT_FOUND, 'User NOT foud!!!');
        }
        return user;
    } catch (err) {
        throw err;
    }
}

const updateUserEmail = async (req) => {
    try {
        if (await User.emailTaken(req.body.newemail)) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Email is taken!!!');
        }

        const user = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
                "$set": {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age
                }
            },
            { new: true }
        );
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findUserByEmail,
    findUserById,
    updateUserProfile
}