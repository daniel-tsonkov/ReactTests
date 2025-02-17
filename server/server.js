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
const { User } = require('/models/user');

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Using port ${port}`);
});