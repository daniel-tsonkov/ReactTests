const passport = require('passport');
const { AppiError, ApiError } = require('./apiError');
const httpStatus = require('http-status');
const { roles } = require('../config/roles');

const verify = (req, res, resolve, reject, rights) => async (err, user) => {
    if (err || !user) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access'));
    }

    if (rights.length) {
        const action = rights[0]; //createAny, readAny...
        const recource = rights[1]; //profile, articles
        const permission = roles.can(req.user.role)[action](recource);

        if (!permission.granted) {
            return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access'));
        }
    }

    resolve();
}


const auth = (...rights) => async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('jwt', { session: false }, verify(req, res, resolve,
            reject, rights))(req, res, next);
    })
        .then(() => next())
        .catch((err) => next(err))
}

module.exports = auth;