'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(express.static('public')); //ezzel mondjuk meg az expressnek hogy ezt a mappát használja static fájlokhoz
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Can be in a separate db.js file BUT be careful importing and exporting it
let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(function(err) {
  err
    ? console.log('Error connecting to Database')
    : console.log('Connection to database has been established');
});

//  GET /
app.get('/', (req, res) => {
  //res.setHeader('content-type');
  res.sendFile(__dirname + '/index.html');
});

// GET /q/:id EZ CSAK RENDEREL JAVÍTSD!
app.get('/q/:id', (req, res) => {
  const id = req.params.id;
  const queryQuestion = `SELECT * FROM questions WHERE id = ?`;
  conn.query(queryQuestion, id, (err, questions) => {
    if (err) {
      res.status(500).send({ message: 'Can not connect to database' });
      return;
    } else if (questions[0] == undefined) {
      res.send({ message: 'the question was not found' });
    } else {
      res.send(questions);
    }
  });
});

// POST /api/questions
app.post('/api/questions', (req, res) => {
    const question = req.body.question;
    const queryAddQuestion = `INSERT INTO questions (question_content) VALUES (?);`;
    conn.query(queryAddQuestion, question, (err, postedQuestion) => {
      if (err) {
        res.status(500).send({ message: 'Can not connect to database' });
        return
      } else {
        //res.setHeader('Content-type', 'application/json');
        //res.status(200); //ez kell?? mert írja a feladat
        res.status(200).send({'id': postedQuestion.insertId, 'question': `${question}`});
      }
    });
});

// POST /api/questions/:id/answers
app.post('/api/questions/:id/answers', (req, res) => {
  const id = req.params.id;
  const answer = req.body.answer;
  const queryAddAnswer = `INSERT INTO answers (message, question_id) VALUES (?,?);`;
  conn.query(queryAddAnswer, [answer, id], (err, answer) => {
    if (err) {
      res.status(500).send({ message: 'Can not connect to database' });
      return
    } else {
      res.sendStatus(204); //ez kell?? mert írja a feladat
    }
  });
});

// GET /api/questions/:id
app.get('/api/questions/:id', (req, res) => {
  const id = req.params.id;
  //const queryShowQuestionInfo = `SELECT question_id, question_content FROM questions LEFT JOIN answers ON questions.question_id = answers.question_id WHERE questions.question_id = ${id};`;
  const queryShowQuestionInfo = `SELECT * FROM questions WHERE question_id = ${id};`
  conn.query(queryShowQuestionInfo, (err, question) => {
    if (err) {
      res.status(500).send({ message: 'Can not connect to database' });
      return
    } else {
      //console.log(question[0].question_content);
      const queryShowAnswerInfo = `SELECT answer_id, message FROM answers WHERE question_id = ${id};`;
      conn.query(queryShowAnswerInfo, (err, answer) => {
        if (err) {
          res.status(500).send({ message: 'Can not connect to database' });
          return
        } else {
          res.send({'id': `${id}`, 'question': question[0].question_content, 'answers': answer});
        }
      });
    }
  });
});

// GET /api/questions/
app.get('/api/questions', (req, res) => {
  if (req.query.limit && req.query.offset) {
    let limit = req.query.limit;
    let offset = req.query.offset;
    const queryLimitOffset = `SELECT * FROM questions ORDER BY question_id DESC LIMIT ${limit} OFFSET ${offset};`;
    conn.query(queryLimitOffset, (err, rows) => {
      if(err) {
        res.status(500).send({ message: 'Can not connect to database' });
        return
      } else {
        res.send(rows);
      }
    });
  } else if (req.query.limit) {
    let limit = req.query.limit;
    const queryLimit = `SELECT * FROM questions ORDER BY question_id DESC LIMIT ${limit};`;
    conn.query(queryLimit, (err, limited) => {
      if(err) {
        res.status(500).send({ message: 'Can not connect to database' });
        return
      } else {
        res.send(limited);
      }
    })
  } else {
  const queryAll = `SELECT * FROM questions;`;
  conn.query(queryAll, (err, allQeustions) => {
    if (err) {
      res.status(500).send({ message: 'Can not connect to database' });
      return
    } else {
      res.setHeader('Content-type', 'application/json');
      res.status(200); //ez kell?? mert írja a feladat
      res.send(allQeustions);
    }
  });
}
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});