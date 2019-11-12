'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');
//1st test
test('speed with infos', t => {
  request(app)
    .get('/yondu') //it makes a request to these end points
    .query({ distance: 100, time: 10 }) //ezzel érem el hogy dinamikus legyen a teszt, itt adom meg hogy a receivednél milyen messaget írtam volna be
    .expect('Content-Type', /json/) //the header can be anything but has to be in json
    .expect(200)
    .end(function(err, res) {
      let message = {
        "distance": 100,
        "time": 10,
        "speed": 10
      };
      t.error(err, 'No error'); //ez az első teszt
      t.deepEqual(res.body, message, 'Correct speed calcilation'); //ez a második teszt, hogy amit visszakaptunk (res.body) az egyezik-e az általam megadott messsage változóval
      t.end();
    });
});
//2nd test A version
test('speed without infos', t => {
  request(app)
    .get('/yondu')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function(err, res) {
      let errorMessage = {"error": "Please add time and distance"};
      t.error(err, 'No error');
      t.deepEqual(res.body, errorMessage, 'Correct error message');
      t.end();
    });
});