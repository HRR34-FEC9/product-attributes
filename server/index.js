const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
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

app.listen(3500, () => {
  console.log( "listening on port 3500");
});