'use strict'

const mysql = require('mysql');
const express = require('express');
const config = require('./config');

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

app.listen(config.app.port);