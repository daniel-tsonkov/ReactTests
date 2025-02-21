const express = require('express');
const router = express.Router();

//routes
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const articlesRoute = require('./article.route');

const routesIndex = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/articles',
        route: articlesRoute
    },
]

module.exports = router;