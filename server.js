const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'име_на_твоята_база_данни';

// Създаване на клиент за MongoDB
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3001
app.listen(port);