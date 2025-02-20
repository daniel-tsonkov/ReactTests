const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017/';

//PARSING
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER RUNING ON PORT ${port}`);
})
