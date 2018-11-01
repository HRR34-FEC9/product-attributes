const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('./models/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

//application routes
require('./routes/index')(app);

//catch all
app.get('/api', (req, res) =>
  res.status(200).send('successful API connection')
);


module.exports = app;

