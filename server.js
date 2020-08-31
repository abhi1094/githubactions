const express = require ('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('hello world')
  });

app.listen(PORT, () => console.log(`APP started on ${PORT}`));