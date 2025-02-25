const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const { xss } = require('express-xss-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes');

// Адресът към MongoDB и името на базата данни
const mongoUri = `mongodb://${process.env.DB_HOST}`;
//const mongoURI = `mongodb://localhost:27017/flickbase`;
mongoose.connect(mongoUri)

// PARSING
app.use(bodyParser.json());

// SANITIZE
app.use(xss());
app.use(mongoSanitize());

// ROUTES
app.use('/api', routes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});