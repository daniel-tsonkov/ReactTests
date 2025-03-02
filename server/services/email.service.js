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
        let mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Flickbase",
                link: `${process.env.EMAIL_MAINURL}`
            }
        });

        const email = {
            body: {
                name: userEmail,
                intro: 'intro message for welcome.......',
                action: {
                    instructions: 'To validate your account, please click here:',
                    button: {
                        color: '#1a73e8',
                        text: 'Validate your acount',
                        link: `${process.env.SAIT_DOMAIN}verification?=${emailToken}`
                    }
                },
                outro: 'For need from help....'
            }
        };

        let emailBody = mailGenerator.generate(email);

        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Dobre doshli v flickbase",
            html: emailBody
        };

        await transporter.sendMail(message);
        return true;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    registerEmail
}

