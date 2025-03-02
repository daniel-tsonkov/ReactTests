const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const registerEmail = async (userEmail, user) => {
    try {
        const emailToken = user.generateRegisterToken();
    } catch (err) {
        throw err;
    }
};

module.exports = {
    registerEmail
}

