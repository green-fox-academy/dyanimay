'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main-page.html'));
})
app.get('/orders/:id', (req, res) => {
  res.sendFile(path.join(__dirname, './public/order.html'));
});

app.get('/api/orders/:id', (req, res) => {
  // connection.query('SELECT * FROM pizza WHERE id=?', [req.params.id], (err, rows) => {
  //   if (err) throw err;
  //   if (rows[0]) {
  //     res.send(rows[0]);
  //   } else {
  //     res.sendStatus(404);
  //   }
  // })
  const id = req.params.id;
  console.log(`Request was received with id: ${id}`)
  const order = database[id];
  res.send(order);
});

app.listen(3000);