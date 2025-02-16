const express = require('express');
const app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const bodyParcer = require('body-parser');

// Адресът към MongoDB и името на базата данни
const mongoURI = 'mongodb://localhost:27017/cars';
//const dbName = 'uDemy';
//const dbCollection = 'test';

mongoose.connect(mongoURI);

app.use(bodyParcer.json());

////////SCHEMA/////////////
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
})

const Car = mongoose.model('Car', carSchema, 'cars_spec');

app.post('/api/addcar', async (req, res, next) => {
    try {
        const addCar = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            avail: req.body.avail,
        });

        const newCar = await addCar.save()
        //console.log(newCar);
        res.send(200);

    } catch (err) {
        console.log(err);

    }
})

app.get('/api/getcars', async (req, res, next) => {
    try {
        let doc = await Car.find({}) //obekt ot vsichki koli
        // let doc = await Car.find({ brand: 'Ford2' }) //vrushta samo Ford2
        res.json(doc);

    } catch (err) {
        console.log(err);

    }
})

app.post('/api/removecar', async (req, res, next) => {
    try {
        const brand = req.body.brand;
        let doc = await Car.findOneAndRemove({ brand: brand });
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