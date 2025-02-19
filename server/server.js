const express = require('express');
const bodyParcer = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017/';

mongoose.connect(mongoURI);

//MIDDLEWARE////
app.use(bodyParcer.json());
app.use(cookieParser());

//MODELS////
const { User } = require('./models/user.js');

app.post(('/api/user'), async (req, res, next) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        let doc = await user.save();
        res.status(200).send(doc);
    } catch (err) {
        res.status(400).send(err);
        //console.log(err);
    }
});

app.post('/api/user/login', async (req, res, next) => {
    try {
        //finde use if exist
        let user = await User.findOne({ 'email': req.body.email });
        if (!user) throw 'User not found';

        //compare the password with the hashed password on DB
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw 'Bad password';
            if (!isMatch) return res.status(400).json({
                message: 'Bad password'
            })

            //send response
            user.generateToken((err, user) => {
                if (err) throw err;
                res.cookie('auth', user.token).send('OK...');
            })
        })
    } catch (err) {
        res.json({ message: err })
        console.log(err);
    }
});

app.get('/api/books', async (req, res, next) => {
    let token = req.cookies.auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(400).json({
            message: 'Bad token'
        });
        res.status(200).send(user);
    })
});

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Using port!!! ${port}`);
});