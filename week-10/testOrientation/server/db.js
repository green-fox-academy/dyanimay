'use strict'

const mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(function(err) {
  err ? console.log('Error connecting to Database') : console.log('Connection to database has been established');
});

module.exports = conn;