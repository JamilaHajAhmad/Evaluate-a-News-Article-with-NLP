const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
let meaningCloud = new meaningCloud({
    application_key: process.env.API_KEY
});

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.post('/analyze', (req, res) => {
    meaningCloud.sentiment(req.body.text, (err, response) => {
        if (err) {
            res.send(err);
        } else {
            res.send('https://api.meaningcloud.com/sentiment-2.1');
        }
    });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});