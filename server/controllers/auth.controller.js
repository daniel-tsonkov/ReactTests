const httpStatus = require('http-status');
const { authService } = require('../services')

const authController = {
    async register(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
        } catch (err) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
    }
}

module.exports = authController;