const jwt = require('jsonwebtoken');

let id = '100';
const secret = 'superSecretPass';

const token = jwt.sign(id, secret);
console.log(token);
