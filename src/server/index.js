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


app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.post('/', (req, res) => {
    res.send('https://api.meaningcloud.com/sentiment-2.1');
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});