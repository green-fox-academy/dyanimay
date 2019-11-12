'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('First test!', function(t) {
  t.end();
});

test('Correct Pokemons returned', function(t) {
  request(app)
    .get('/api/pokemon') //it makes a request to these end points
    .expect('Content-Type', /json/) //the header can be anything but has to be in json
    .expect(200)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.equal(res.body.length, 4, 'Correct number of pokemons');
      t.equal(res.body[0].name, 'Pikachu', 'Correct name of the first pokemon')
      t.end();
    });
});

test('Correct Pokemons returned', function(t) {
  request(app)
    .get('/api/pokemon/3') //it makes a request to these end points
    .expect('Content-Type', /json/) //the header can be anything but has to be in json
    .expect(200)
      .end(function (err, res) {

        let pokemon = {"id":3,"name":"Togepi","type":"normal","level":24}
        t.error(err, 'No error');
        t.deepEqual(res.body, pokemon, 'Correct pokemon');
        t.end();
      });
  });

  test('Correct pokemons returned by ID', function (t) {
    request(app)
      .get('/api/pokemon/5')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, {"error": "No pokemon found with this ID"}, 'Correct pokemon');
        t.end();
      });
  });

  test('Correct pokemons returned by type normal', function (t) {
    request(app)
      .get('/api/pokemon')
      .query({ type: 'normal'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        let pokemons = [
            {
                id: 3,
                name: "Togepi",
                type: "normal",
                level: 24
            },
            {
                id: 4,
                name: "Ratata",
                type: "normal",
                level: 99
            }
        ]
        t.error(err, 'No error');
        t.deepEqual(res.body, pokemons, 'Correct normal pokemons');
        t.end();
      });
  });

  test('Correct pokemons returned by ID', function (t) {
    request(app)
      .get('/api/pokemon/5')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, {"error": "No pokemon found with this ID"}, 'Correct pokemon');
        t.end();
      });
  });

  test('Correct pokemons returned by type water', function (t) {
    request(app)
      .get('/api/pokemon')
      .query({ type: 'water'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, [], 'Correct water pokemons');
        t.end();
      });
  });

  test('Correct pokemons returned by type water', function (t) {
    request(app)
      .get('/api/pokemon')
      .query({ typee: 'normal', owner: 'ash'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {

        let pokemons = [
            {
                id: 1,
                name: "Pikachu",
                type: "electric",
                level: 10
            },
            {
                id: 2,
                name: "Charmander",
                type: "fire",
                level: 54
            },
            {
                id: 3,
                name: "Togepi",
                type: "normal",
                level: 24
            },
            {
                id: 4,
                name: "Ratata",
                type: "normal",
                level: 99
            }
        ]

        t.error(err, 'No error');
        t.deepEqual(res.body, pokemons, 'Correct water pokemons');
        t.end();
      });
  });

  test('Correct new pokemon', function (t) {
    request(app)
      .post('/api/pokemon')
      .send({
        "name": "Slowpoke",
        "type": "water",
        "level": 2
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, {"id": 5}, 'Correct id');
        t.end();
      });
  });

  test('Correct new pokemon', function (t) {
    request(app)
      .post('/api/pokemon')
      .send({
        "name": "Slowpoke",
        "type": "water",
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, {"error": "Not a valid pokemon object"}, 'Failed successfully');
        t.end();
      });
  });