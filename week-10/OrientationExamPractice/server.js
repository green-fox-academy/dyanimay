'use strict'

const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT; 

const app = express();
app.use(express.static('static')); //ezzel mondjuk meg az expressnek hogy ezt a mappát használja static fájlokhoz
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

//Can be in a separate db.js file BUT be careful importing and exporting it
let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(function(err) {
  err ? console.log('Error connecting to Database') : console.log('Connection to database has been established');
});

//The main page should be rendered
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

//GET /order/{id}
app.get('/order/:id', (req,res) => {
  res.sendFile(__dirname + '/static/order.html')
});

//GET /api/orders/{id}
const database = [
  {
    "id": 0,
    "name": "Bill Gates",
    "address": "Budapest, Andrássy út 66, 1062",
    "pizza": "diavola"
  },
  {
    "id": 1,
    "name": "Bill Gates",
    "address": "Budapest, Andrássy út 66, 1062",
    "pizza": "diavola"
  }
]
app.get('/api/orders/:id', (req, res) => {
  // connection.query('SELECT * FROM tablename WHERE id=?', [req.params.id], (err,rows) => {
  //   if (err) throws (err);
  //   if (rows[0]) {
  //     res.send(rows[0]);
  //   } else {
  //     res.sendStatus(404);
  //   }
  // })
  const id = req.params.id;
  console.log((`Request was received with id: ${id}`))
  const order = database[id];
  res.send(order);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});