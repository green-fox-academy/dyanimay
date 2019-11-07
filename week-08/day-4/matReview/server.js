const express = require('express');
const path = require('path');
const PORT = 8080;

let app = express();
app.use(express.json());

app.get('/batman', (req, res) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.send('Batman changed the calendar');
});

app.listen(PORT, () => {

});