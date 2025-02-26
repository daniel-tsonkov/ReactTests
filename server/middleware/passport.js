const { user } = require('../models/user');
require('dotenv').config();

const { Strategy: JwtStrategy, ExtractJwt, Strategy } = require('passport-jwt');

const jwtOptions = {
    secretOrKey: process.env.DB_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtVerify = async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if (condition) {

        }

        done(null, user);
    } catch (err) {
        done(err, false);
    }
}

const JwtStrategy = new Strategy(jwtOptions, jwtVerify);

module.exports = {
    JwtStrategy
}