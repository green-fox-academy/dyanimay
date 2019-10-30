const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let doubling = {};
  //console.log(req.query.input);
  res.setHeader("Content-type", "application/JSON");
  if (req.query.input !== undefined) {
      res.status(200);
      doubling['received'] = req.query.input;
      doubling['result'] = req.query.input * 2;
  } else {
      res.status(200); 
      doubling = {
          "error": "Please provide an input!"
      }
  }
  res.send(doubling);
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});