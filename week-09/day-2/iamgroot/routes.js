const express = require('express');
const app = express();

const bodyParser = require('body-parser');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.get('/groot', (req, res) => {
  // TODO: implement this method
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