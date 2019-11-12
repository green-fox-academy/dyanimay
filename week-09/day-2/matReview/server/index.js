'use strict';

let express = require('express');
let app = express();

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

let pokemonDatabase = [
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

app.get('/api/pokemon', function (req, res) { //localhost:3000/api/pokemon?type=fire így keresünk fire pokemont postmannal
    let type = req.query.type;
    let filteredPokemons = pokemonDatabase;

    if(type){
        filteredPokemons = pokemonDatabase.filter(obj =>{
            return obj.type == type;
        });
    }

    res.status(200);
    res.json(filteredPokemons); 
});

app.get('/api/pokemon/:id', function (req, res) {
    let id = req.params.id;
    let pokemon = pokemonDatabase.find(obj => {
        return obj.id == id
    });

    if(pokemon){
        res.status(200);
        res.json(pokemon);
    }else{
        res.status(404);
        res.json({"error": "No pokemon found with this ID"});
    }
});

app.post('/api/pokemon', function (req, res) {
    let body = req.body;
    
    if(body.type && body.name && body.level && Object.keys(body).length == 3){
        let maxID = Math.max.apply(Math, pokemonDatabase.map(function(o) { return o.id; }));
        body.id = maxID + 1;

        pokemonDatabase.push(body);
        res.status(200);
        res.json({"id":  maxID + 1});
    }else{
        res.status(400);
        res.json({"error": "Not a valid pokemon object"});
    }
});

module.exports = app; //this helps to use the app