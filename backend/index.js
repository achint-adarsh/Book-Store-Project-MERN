import express from 'express';
import { PORT, MONGODB_URL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Helloo from backend.");
})

app.use('/books', booksRoute);

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("App connectd to database.");
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}.`);
        })

    })
    .catch((error) => {
        console.log("Error connecting to DB.")
    })