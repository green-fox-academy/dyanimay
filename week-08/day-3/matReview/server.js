'use strict';

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser());

app.get('/', (req, res) => res.sendfile('index.html'));

app.post('/send', (req, res) => console.log(req.body.pistike) );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));