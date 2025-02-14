const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');


const port = process.env.PORT || 3001
app.listen(port);