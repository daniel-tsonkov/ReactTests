const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//PARSING
app.use(bodyParser.json());

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`RUN ON PORT ${port}`);
})
