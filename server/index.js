const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('../database/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('api/product/info', (req, res) => {
  xxxxx.get((err, data) => {
    if (err) {
      return res.status(500).send('error retrieving data')
    } else {
      return res.status(200).send(data);
    }
  })
});

// // models.sequelize.sync({}).then(() => {
//   app.listen(3500, () => {
//   console.log( "listening on port 3500");
//   });
// // });

module.exports = app;

