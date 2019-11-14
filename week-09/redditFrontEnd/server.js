'use strict'

const mysql = require('mysql');
const express = require('express');
const config = require('./config'); //emiatt olvassa be a config fájlt
let bodyParser = require("body-parser"); //to use the body, we need body parser "npm install body-parser --save", mindenképp kapunk vissza body-t (infot {}-ben), de ha használni is akarjuk akkor kell ez

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();

//connect to mysql database where the infos are saved in the .env file'
let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
  // host: config.db.host,
  // user: config.db.user,
  // password: config.db.password,
  // database: config.db.database
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Database');
    console.log(err);
    return;
  }
  console.log('Connection to database has been established');
});
//END OF SQL

// APP.GET
app.get("/posts", (req, res) => {
  conn.query("SELECT * FROM posts", (err, result) => {
    res.setHeader("Content-type", "application/json");
    res.send(JSON.stringify(result)); //REST API
  });
});
// END OF APP.GET

app.listen(config.app.port);