const express = require('express');
const bodyParcer = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017/';

mongoose.connect(mongoURI);

//MIDDLEWARE////
app.use(bodyParcer.json());

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

            res.status(200).send(isMatch);
        })
    } catch (err) {
        res.json({ message: err })
        console.log(err);
    }
})

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Using port!!! ${port}`);
});