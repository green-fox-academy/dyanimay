'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/send', (req, res) => console.log(req.body.username));

app.listen(port, () => console.log(`This app is listening on post ${PORT}`));