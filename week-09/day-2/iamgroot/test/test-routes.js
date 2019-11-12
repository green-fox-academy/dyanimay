'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot') //it makes a request to these end points
    .query({message: 'lol'}) //ezzel érem el hogy dinamikus legyen a teszt, itt adom meg hogy a receivednél milyen messaget írtam volna be
    .expect('Content-Type', /json/) //the header can be anything but has to be in json
    .expect(200)
      .end(function (err, res) {
        let message = {
          "received": "lol",
          "translated": "I am Groot!"
      };
        t.error(err, 'No error'); //ez az első teszt
        t.deepEqual(res.body, message, 'Correct message'); //ez a második teszt, hogy amit visszakaptunk (res.body) az egyezik-e az általam megadott messsage változóval
        t.end();
      });
});