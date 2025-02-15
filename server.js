const express = require('express');
const app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const bodyParcer = require('body-parser');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'uDemy';
const dbCollection = 'test';

mongoose.connect(mongoURI);

app.use(bodyParcer.json());

////////SCHEMA/////////////
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
})

const Car = mongoose.model('Car', carSchema);

app.post('/api/addcar', async (req, res, next) => {
    try {
        const addCar = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            avail: req.body.avail,
        });

        await mongoose.save()
    } catch (err) {
        console.log(err);

    }
})

///////////////////////////

// Създаване на клиент за MongoDB
// const client = new MongoClient(mongoURI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// });

// async function run() {
//     try {
//         // Стартиране на връзката
//         await client.connect();
//         console.log('Свързан успешно с базата данни');

//         // Използване на базата данни
//         //const db = client.db(dbName);

//         // Тук можеш да правиш заявки или други операции с базата данни

//     } finally {
//         await client.close();
//     }
// }

//run().catch(console.dir); //Ако има грешки ще я отпечата

// app.get('/api/users', async (req, res, next) => {
//     try {
//         await client.connect();
//         const database = client.db(dbName);
//         const collection = database.collection(dbCollection);
//         const query = await collection.insertOne({
//             name: 'Name1',
//             lastname: 'Lastname1'
//         })
//         console.log(query);

//         res.status(200).json({ Done: 'Yes' });
//     } catch (err) {
//         throw err;
//     }
//     finally {
//         await client.close();
//         console.log("Conection is closed");

//     }
// });

const port = process.env.PORT || 3001
app.listen(port);