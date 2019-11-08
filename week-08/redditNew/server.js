const mysql = require('mysql')
const express = require('express');
const path = require('path');
const PORT = 8080;
const env = require('dotenv').config();

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(function(err) {
    if (err) {
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }
    console.log('Connection to database established\n');
});

const app = express();
app.use(express.json());

//first task
app.get('/hello', function(req, res) {
    res.send("hello :)");
})

// APP.GET 
app.get('/posts', (req, res) => {
    const queryString = "SELECT * FROM reddit.reddit_posts"
    conn.query(queryString, (err, result) => {
        res.setHeader("Content-type", "application/json");
        res.send(JSON.stringify(result));
        console.log('Client request: "Get API".')
    });
});

// ADD NEW POST
app.post('/posts', function(req, res) {
    const queryString = `INSERT INTO reddit.reddit_posts (title, url, score) VALUES ('${req.body.title}', '${req.body.url}', '0')`
    conn.query(queryString, (err, result) => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${result.insertId}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    });
});

//UPVOTE

app.put('/posts/:id/upvote', function(req, res) {
    const queryString = `UPDATE reddit.reddit_posts SET score = score + 1 WHERE id = ${req.params.id}`;
    conn.query(queryString, () => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${req.params.id}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    })
})

//DOWNVOTE
app.put('/posts/:id/downvote', function(req, res) {
    //const score = `SELECT score FROM reddit.reddit_posts WHERE id=${req.params.id}`;
    //conn.query(score, (err, scoreresult) => {
    const queryString = `UPDATE reddit.reddit_posts SET score = score - 1 WHERE id = ${req.params.id}`;
    conn.query(queryString, () => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${req.params.id}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    })
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});