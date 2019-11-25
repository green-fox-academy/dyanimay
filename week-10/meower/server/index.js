'use strict'

const express = require('express');
const PORT = 8080;
const cors = require('cors');
const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'T0thba1csecse',
  database: 'MewTwitter'
});
conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Database');
    console.log(err);
    return;
  }
  console.log('Connection to database has been established');
});

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static(__dirname + '/../client'));

app.get('/', (req, res) => {
  res.json({
    message: 'Meower!'
  });
  //res.sendFile('/index.html');
});

app.get('/mews', (req, res) => {
  const queryAll = `SELECT * FROM mewPost ORDER BY id DESC;`;
  conn.query(queryAll, (err, post) => {
    res.setHeader('Content-type', 'application/jsn');
    res.status(200);
    res.send(JSON.stringify(post));
  })
})

function isValidMew(mew) {
  return mew.name && mew.name.toString().trim() !== ''
&& mew.name && mew.name.toString().trim() !== '';
}

app.post('/mews', (req, res) => {
  if (isValidMew(req.body)) {
    // insert into DB...
    const queryAdd =`INSERT INTO mewPost (name, content) VALUES ('${req.body.name}', '${req.body.content}');`
    conn.query(queryAdd, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        //console.log(result);
        const query = `SELECT * FROM mewPost ORDER BY id DESC LIMIT 1;`;
        conn.query(query, (err, post) => {
          //console.log(post);
          res.setHeader('Content-type', 'application/json');
          res.status(200);
          res.send(JSON.stringify(post));
        });
      }
    });
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date()
    }

    // console.log(mew);
  } else {
    res.status(422);
    res.json({
      message: 'Hey! Name and content are required!'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});