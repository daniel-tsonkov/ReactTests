const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const { xss } = require('express-xss-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes');

const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');
const { handleError, convertToApiError } = require('./middleware/apiError');

// Адресът към MongoDB и името на базата данни
//const mongoUri = `mongodb://${process.env.DB_HOST}`;
const mongoUri = 'mongodb://192.168.0.104:27017/flickbase';
mongoose.connect(mongoUri)

// PARSING
app.use(bodyParser.json());

// SANITIZE
app.use(xss());
app.use(mongoSanitize());

//PASSPORT
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// ROUTES
app.use('/api', routes);

//ERROR HANDLING
app.use(convertToApiError);

app.use((err, req, res, next) => {
    handleError(err, res)
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});