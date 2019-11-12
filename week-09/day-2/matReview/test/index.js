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
    .end(function(err, res) {
      t.error(err, 'No error');
      t.equal(res.body.name, 'Togepi', 'Correct name');
      t.equal(res.body, 'Pikachu', 'Correct name of the first pokemon')
      t.end();
    });
});