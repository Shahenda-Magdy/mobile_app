const express = require('express');
const app  = express();
const icecream = require('./icecream.json');
// const universities = require('./universities.json');

app.get('/icecream', function(req, res) {
  return res.send(icecream);
});

app.get('/icecream/:flavor', function(req, res) {
  const { flavor } = req.params;
  return res.send(icecream[flavor.toLowerCase()]);
});

app.listen(3000, function() {
  console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});