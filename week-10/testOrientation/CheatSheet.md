## 1. Folder Structure
* [ ] create /assets 
  * [ ] create style.css
  * [ ] pictures (if needed) 
* [ ] create /views
  * [ ] create index.html 
  * [ ] index.js (frontEnd JS)
* [ ] create /server 
  * [ ] create db.js
  * [ ] create routes.js
* [ ] create server.js - in the main folder where are the node modules

## 2. copy and run .sh files
* [ ] copy .sh files from week-10/orientation folder
* [ ] run in console "sh ......"
* [ ] after package.json is instaled, rewrite this part:
```
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
```
* if you want to run the server and see changes, go to the main folder (where server.js is) and terminal: "npm run dev"

## 3. Create MySQL Database
* [ ] Go to: https://wtools.io/generate-sql-create-table
* [ ] Create table and these columns:
  * [ ] id: INT, auto increment, unsigned, NOT "allow null", KEY tick
  * [ ] name: VARCHAR, length: 255, allow null
  * [ ] url: VARCHAR, length: 510, allow null
  * [ ] secretCode: INT, length: 4, zerofill
* [ ] Terminal: mysql -u root -p (T0thba1csecse)
  * show databases;
  * create database TestExam;
  * use database TestExam;
  * copy the link from the website
  * exit;

## 4. Create index.html
* [ ] use html:5 auto completion
* [ ] head: `<link rel="stylesheet" href="../assets/style.css">`
* [ ] if a message has to be shown, create DIV or something: 
  * `<div class="message"></div>`
* [ ] create FORM for the input fields:
see orientation example index.html
```
<form>
  <label for="url">URL</label>
  <input type="url" name="url" id="url"/>
  <label for="alias">Alias</label>
  <input type="text" name="alias" id="alias"/>
  <button type="button" class="button">Submit</button>
</form>
```
  * "type" is for the VALIDATION!! It can be text/e-mail/url/tel
* [ ] add script at the end of body tag to connect frontend html and js together: 
  * `<script type="text/javascript" src="./index.js"></script>`

## 5. CSS tips if it is needed
* to set text center: "text-align: center"
* to set a div or box center: "margin: 0 auto;"

## 6. Create the server file in the main folder
* [ ] touch server.js
```
'use strict'

const app = require('./server/routes');
require('dotenv').config();

app.listen(process.env.PORT, ()=> {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
```

## 7. Create db.js for Database
* [ ] touch db.js
* copy this:
```
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
```

## 8. Create routes.js for endpoints
* [ ] touch routes.js
* [ ] copy the basics to the file:
```
'use strict'

const express = require('express');
const conn = require('./db');
let bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();
app.use(express.static('views')); //for html page
app.use('/assets', express.static('assets')); //for css

//endpoints are here

module.exports = app;
```
* [ ] when the task says: "the main page should be rendered", write this:
```
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  res.status(200);
});
```
* [ ] GET /api/links
```
app.get("/api/links", jsonParser, function(req, res) {
  const query = `SELECT id, url, alias, hitCount FROM TestOrientation;`;
  conn.query(query, (err, post) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(post));
  });
});
```
* [ ] POST /api/links + secretCode generator
```
function secretCodeGenerator() {
  return Math.floor(Math.random() * Math.floor(9999) + 1000)
}

app.post("/api/links", jsonParser, function(req, res) {
  res.setHeader("Content-type", "application/json", 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const querySelect = `SELECT alias FROM TestOrientation WHERE alias='${req.body.alias}';`;
  const secretCode = secretCodeGenerator();
  conn.query(querySelect, (err, result) => {
    if (result.length > 0) {
      console.log("benne van az adat");
      res.sendStatus(400);
    } else {
      const queryAdd = `INSERT INTO TestOrientation (url, alias, hitCount, secretCode) VALUES ('${req.body.url}', '${req.body.alias}', 0, ${secretCode});`;
      conn.query(queryAdd, (err, result) => {
        const query = `SELECT * FROM TestOrientation WHERE alias='${req.body.alias}';`;
        conn.query(query, (err, post) => {
          res.status(200);
          res.send(post);
        });
      });
    }
  });
});
```
* [ ] GET /a/{alias}
```
app.get('/a/:alias', function(req, res) {
  const querySelect = `SELECT alias FROM TestOrientation WHERE alias='${req.params.alias}';`;
  conn.query(querySelect, (err, result) => {
    if (result.length > 0) {
      const queryString = `UPDATE TestOrientation SET hitCount = hitCount + 1 WHERE alias='${req.params.alias}';`;
      conn.query(queryString, (err, update) => {
      });
      const query = `SELECT * FROM TestOrientation WHERE alias='${req.params.alias}';`;
      conn.query(query, (err, post) => {
        res.redirect(post[0].url);
      });
    } else {
      res.sendStatus(404);
    }
  }); 
});
```
* [ ] DELETE /api/links/{id}
```
app.delete('/api/links/:id', function(req, res) {
  const queryFindId = `SELECT id, secretCode FROM TestOrientation WHERE id='${req.params.id}';`;
  conn.query(queryFindId, (err, find) => {
    if (find.length > 0) {
      if (req.body.secretCode == find[0].secretCode) {
        const queryDelete = `DELETE FROM TestOrientation WHERE id ='${req.params.id}';`;
        conn.query(queryDelete, (err, deleted) => {
          console.log(deleted);
        })
        res.sendStatus(204);
      } else {
        //console.log('exists but the provided secret code does not match');
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(404);
    }
  })
});
```
## 9. Create index.js frontend