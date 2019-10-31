const express = require ('express');
const mysql = require ('mysql');
const app = express();

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'jaj',
  password: 'alma',
  database: 'myDBname',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.end();