const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/groot', (req, res) => {
  let message = req.query.message; //ez a localhost:3000/groot?message= bármi amit  ide beírsz, ez lesz a query message

  if(message){
    res.status(200);
    res.json({
      "received": message,
      "translated": "I am Groot!"
    });
  } else {
    res.status(404);
    res.json({"error": "I am Groot!"});
  }
});

module.exports = app;