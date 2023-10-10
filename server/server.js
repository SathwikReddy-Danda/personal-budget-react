const express = require('express');
const cors = require('cors');
const app = express();
const port = 3100;

app.use(cors());

//app.use('/', express.static('public'));


const budget = require('./myfile.json');


app.get('/budget', (req, res) => {
    res.json(budget);
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});