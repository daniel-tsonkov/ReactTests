const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'user-list';

// Създаване на клиент за MongoDB
const client = new MongoClient(mongoURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
});

async function run() {
    try {
        // Стартиране на връзката
        await client.connect();
        console.log('Свързан успешно с базата данни');

        // Използване на базата данни
        //const db = client.db(dbName);

        // Тук можеш да правиш заявки или други операции с базата данни

    } finally {
        await client.close();
    }
}

run().catch(console.dir); //Ако има грешки ще я отпечата

app.get('/api/users', async () => {

})

const port = process.env.PORT || 3001
app.listen(port);