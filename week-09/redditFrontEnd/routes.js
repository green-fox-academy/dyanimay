'use strict'

const express = require('express');
const conn = require('./db'); //behívom a database fájlt és adatokat
let bodyParser = require("body-parser"); //to use the body, we need body parser "npm install body-parser --save", mindenképp kapunk vissza body-t (infot {}-ben), de ha használni is akarjuk akkor kell ez

const app = express(); //ettől fut a szerver
app.use(express.static('assets')); //ez fogja megtalálni a statikus fájlokat(képek és css)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();

// APP.GET
app.get("/posts", (req, res) => {
  conn.query("SELECT * FROM posts", (err, result) => {
    res.setHeader("Content-type", "application/json");
    res.send(JSON.stringify(result)); //REST API
  });
});
// END OF APP.GET

// ADD NEW POST -- i have to choose "body" and JSON (a lenyíló menüben) in the POSTMAN
app.post("/posts", jsonParser, function(req, res) {
  const queryString = `INSERT INTO posts (title, url, score) VALUES ('${req.body.title}', '${req.body.url}', '0')`;
  conn.query(queryString, (err, result) => {
    const query = `SELECT * FROM posts WHERE id=${result.insertId}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
    });
  });
});

//UPVOTE
app.put("/posts/:id/upvote", function(req, res) {
  const queryString = `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}`;
  conn.query(queryString, () => {
    const query = `SELECT * FROM posts WHERE id=${req.params.id}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
    });
  });
});

//DOWNVOTE
app.put("/posts/:id/downvote", function(req, res) {
  //const score = `SELECT score FROM redditNew.posts WHERE id=${req.params.id}`;
  //conn.query(score, (err, scoreresult) => {
  const queryString = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id}`;
  conn.query(queryString, () => {
    const query = `SELECT * FROM posts WHERE id=${req.params.id}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
    });
  });
});

//úgy kéne megcisnálni hogy egy "deleted" boolean van a táblázat egyik oszlopában és amikor a törlés történik akkor oda 1 avgy true kerül, és később amikor lekérem a felhazsnálókat akkor csak azokat SELECTelem ki WHERE deleted = false
app.delete("/posts/:id", (req, res) => {
  conn.query("SELECT * FROM posts WHERE id = " + req.params.id + ";", function(err,rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send("Database error");
      res.send();
      return;
    }
    output = rows;
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username"); // should be changable username
    res.status(200);
    res.send(output); //this line send back which post was deleted, in JSON format
  });
  let sqlQuery = "DELETE FROM posts WHERE id = " + req.params.id + " ;";
  conn.query(sqlQuery, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send("Database error");
      res.send();
      return;
    }
  });
});

module.exports = app; //kiexportálom a routes.js fájlban lévő cuccokat ezzel