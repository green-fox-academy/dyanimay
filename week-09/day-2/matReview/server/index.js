'use strict';

let express = require('express');
let app = express();

let pokemonDatabase = [
  {
    id: 1,
    name: 'Pikachu',
    type: 'electric',
    level: 24
  },
  {
    id: 2,
    name: 'Charmander',
    type: 'fire',
    level: 24
  },
  {
    id: 3,
    name: 'Togepi',
    type: 'normal',
    level: 24
  },
  {
    id: 4,
    name: 'Ratata',
    type: 'normal',
    level: 99
  }
]

app.get('/api/pokemon', function (req, res) {
  res.status(200);
  res.json(pokemonDatabase);
});

app.get('/api/pokemon/:id', function (req, res) {
  let id = req.params.id;
  let pokemon = pokemonDatabase.find(obj => {
    return obj.id == id;
  });

  res.status(200);
  res.json(pokemon);
});

app.post('/api/pokemon', function (req, res) {
  let body = req.body

  if(body.type && body.name && body.level && Object.keys(body).length == 3){
    
  };

  pokemonDatabase.push(body);
});

module.exports = app; //this helps to use the app