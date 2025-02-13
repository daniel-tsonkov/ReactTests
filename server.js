const express = require('express');
const app = express();

app.get('/api/users', (req, res, next) => {
    res.json([
        { id: 1, us: 'AAA' },
        { id: 2, us: 'BBB' }
    ])
})

const port = process.env.PORT || 3001
app.listen(port);