const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
const { userService, authService, emailService } = require('../services');
const { verify } = require('jsonwebtoken');

const userController = {
    async profile(req, res, next) {
        try {
            const user = await userService.findUserById(req.user._id);

            if (!user) {
                throw new ApiError(httpStatus.NOT_FOUND, 'Use is not found!!!');
            };

            res.json(res.locals.permission.filter(user._doc));
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    async updateProfile(req, res, next) {
        try {
            const user = await userService.updateUserProfile(req);
            res.json(res.locals.permission.filter(user._doc));
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    async updateUserEmail(req, res, next) {
        try {
            const user = await userService.updateUserEmail(req);
            const token = await authService.genAuthToken(user);

            //SENDING EMAIL
            await emailService.registerEmail(email, user);

            res.cookie('x-access-token', token)
                .send({
                    user: res.locals.permission.filter(user._doc),
                    token
                })
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    async verifyAcount(req, res, next) {
        try {

        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController;