const express = require('express');
const bodyParcer = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017/cars';

mongoose.connect(mongoURI);

app.use(bodyParcer.json());



const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Using port ${port}`);
});