'use strict'

const mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

conn.connect(function(err) {
  err ? console.log('Error connecting to Database') : console.log('Connection to database has been established');
});

module.exports = conn;