'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with message', t => {
  request(app)
    .get('/groot') //it makes a request to these end points
    .query({ message: 'lol' }) //ezzel érem el hogy dinamikus legyen a teszt, itt adom meg hogy a receivednél milyen messaget írtam volna be
    .expect('Content-Type', /json/) //the header can be anything but has to be in json
    .expect(200)
    .end(function(err, res) {
      let message = {
        received: 'lol',
        translated: 'I am Groot!'
      };
      t.error(err, 'No error'); //ez az első teszt
      t.deepEqual(res.body, message, 'Correct message'); //ez a második teszt, hogy amit visszakaptunk (res.body) az egyezik-e az általam megadott messsage változóval
      t.end();
    });
});

test('groot endpoint without message', t => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function(err, res) {
      let errorMessage = {"error": "I am Groot!"};
      t.error(err, 'No error');
      t.deepEqual(res.body, errorMessage, 'Correct error message');
      t.end();
    });
});

test('groot endpoint without message', t => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(404)
    .end((err, res) => { //new wave solution, writing this instead of "function"
      let errorMessage = {"error": "I am Groot!"};
      t.error(err, 'No error');
      t.deepEqual(res.body, errorMessage, 'Correct error message');
      t.end();
    });
});