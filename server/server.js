const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config(); // връзка с .env файла
//import punycodeUrl from 'punycode-url'; //Да се провери как се ползва 

const bodyParser = require('body-parser');

const routes = require('./routes');

// Адресът към MongoDB и името на базата данни
const mongoURI = `mongodb://${process.env.DB_HOST}`;
//const mongoURI = `mongodb://localhost:27017/flickbase`;
mongoose.connect(mongoURI);

//PARSING
app.use(bodyParser.json());

app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER RUNING ON PORT ${port}`);
})
