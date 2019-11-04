//STEP 1
const express = require('express'); //it makes our .js file to be able to do backend
const mysql = require('mysql');
const env = require('dotenv').config(); //env is not called anywhere
var bodyParser = require('body-parser') //to use the body, we need body parser "npm install body-parser --save", mindenképp kapunk vissza body-t (infot {}-ben), de ha használni is akarjuk akkor kell ez

//STEP 1
const app = express(); 
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
var jsonParser = bodyParser.json()
//STEP 2 - Connecting the server and the sql database
let conn = mysql.createConnection({ //ehhez kell telepíteni npm install mysql which connect the database to the server
  host: 'localhost',
  user: 'root', //rewrote this
  password: 'T0thba1csecse',
  database: 'rapgods'
});
//STEP 2 - Connecting the server and the sql database - does nothing else
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

let output = {}
let currentUser = 'testUser' //this is needed because we added the optional user to the mySQL
//STEP 3 - TASK 1: Hello world - endpoint
app.get('/hello', function (req, res) {
  res.send('Hello World!') //it overrides the whole webpage when i open localhost:3000/hello
})
//STEP 4 - TASK 2: post get endpoint WIRING IN
app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) { //query = az amit beírnék a mysql sorba a konzolban
    if (err) { //database mistakes go here
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Accept", "application/json"); //it was in the API Specifications page given by Greenfox
    res.setHeader("Content-type", "application/json"); //the content type is in the response so we have to add it here
    res.setHeader("Username", "username");        // should be changable username
    res.status(200); //status code is given, too
    output = { "posts": rows } //create an "output" object, key is posts, value is rows(entries inside the database)
    res.send(output); //ettől fog megjelenni, ettől lesz "visszaküldve" = response
  });
});
//STEP 5 - TASK 3: post a post on the website ADDING
app.post('/posts', jsonParser, (req, res) => {
  let response = req.body;
  //and also save the Post to your database = ezzel hogy változót hoztunk létre az INSERT funkcióra ls ezt használjuk a conn.queryre
  let sqlQuery = ("INSERT INTO posts VALUES(null,'" + respone.title + "','" + response.url + "','" + Date.now() + "',1,'" + currentUser + "',1);"); //ezt írnád be az sql sorába
  //make sure that you receive the proper object
  conn.query(sqlQuery, function (err, rows) { //először beszedünk mindent adatot, az ebben benne lévő conn.queryvel meg csak azt adjuk VISSZA amit mi akarunk, ami az i-t megadták
    if (err) { //safety
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    //and return the proper object as a response
    conn.query('SELECT * FROM posts WHERE id = ?;', [rows.insertId], function (err, newRow) { //azt akarom látni amit a user beír, ezért írok kérdőjelet és a [rows.insertID]
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });


})

app.put('/posts/:id/upvote', (req, res) => {
  let sqlQuery = ("UPDATE posts SET score = score + 1 WHERE id = "+ req.params.id+";");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, newRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });

})

app.put('/posts/:id/downvote', (req, res) => {
  let sqlQuery = ("UPDATE posts SET score = score - 1 WHERE id = "+ req.params.id+";");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, newRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });
})

app.delete('/posts/:id', (req, res) => {
  conn.query('SELECT * FROM posts WHERE id = '+ req.params.id +';', function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    output = rows
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    res.send(output);
  });
  let sqlQuery = ("DELETE FROM posts WHERE id = "+ req.params.id+" ;");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
  });

})
//STEP 1
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});