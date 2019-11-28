'use strict'

const mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
  host: process.env.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Database');
    console.log(err);
    return;
  }
  console.log('Connection to database has been established');
});

module.exports = conn;