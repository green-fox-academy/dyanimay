'use strict'

const express = require('express');
const conn = require('./db');
let bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();
app.use(express.static('views')); //for html page
app.use('/assets', express.static('assets')); //for css

//LANDING - opening page - "the main page should be rendered"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  res.status(200);
});
//GET infos which are on the endpoint
app.get("/api/links", jsonParser, function(req, res) {
  const query = `SELECT id, url, alias, hitCount FROM TestOrientation;`;
  conn.query(query, (err, post) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(post));
  });
});
//POST infos to the endpoint and store them in the table

//secret code generator
function secretCodeGenerator() {
  return Math.floor(Math.random() * Math.floor(9999) + 1000)
}

app.post("/api/links", jsonParser, function(req, res) {
  res.setHeader("Content-type", "application/json", 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const querySelect = `SELECT alias FROM TestOrientation WHERE alias='${req.body.alias}';`;
  const secretCode = secretCodeGenerator();
  conn.query(querySelect, (err, result) => {
    if (result.length > 0) {
      console.log("benne van az adat");
      res.sendStatus(400);
    } else {
      const queryAdd = `INSERT INTO TestOrientation (url, alias, hitCount, secretCode) VALUES ('${req.body.url}', '${req.body.alias}', 0, ${secretCode});`;
      conn.query(queryAdd, (err, result) => {
        const query = `SELECT * FROM TestOrientation WHERE alias='${req.body.alias}';`;
        conn.query(query, (err, post) => {
          res.status(200);
          res.send(post);
        });
      });
    }
  });
});

module.exports = app;