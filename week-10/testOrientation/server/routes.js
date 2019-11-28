'use strict'

const express = require('express');
const conn = require('./db');
let bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();
app.use(express.static('views'));

//endpoints are here

module.exports = app;