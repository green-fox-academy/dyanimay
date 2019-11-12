const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/yondu', (req, res) => {
  let distance = req.query.distance; //ez a localhost:3000/yondu?distance= bármi amit  ide beírsz, ez lesz a query distance
  let time = req.query.time;

  if(distance && time){
    if (time > 0){
    res.status(200);
    res.json({
      "distance": distance,
      "time": time,
      "speed": distance/time
    });
    } else {
    res.status(404);  
    res.json({"error": "This is matematically incorrect you moron"})
    }
  } else {
    res.status(404);
    res.json({"error": "Please add time and distance"});
  }
});

module.exports = app;