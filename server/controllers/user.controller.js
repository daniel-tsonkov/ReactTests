const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
const { userService } = require('../services');

const userController = {
    async profile(req, res, next) {
        try {
            const user = await userService.findUserById(req.user._id);

            if (!user) {
                throw new ApiError(httpStatus.NOT_FOUND, 'Use is not found!!!');
            };

            res.json(user);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = userController;