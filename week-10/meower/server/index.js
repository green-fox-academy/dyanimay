'use strict'

const express = require('express');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Meower!'
  });
});

app.post('/mews', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});