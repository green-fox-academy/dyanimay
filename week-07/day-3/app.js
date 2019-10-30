const express = require('express');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send(200);
    res.setHeader("Content-type", "text/plain");
    res.send('OK3!');
});

app.get('/v1/audio-analysis', (req, res) => {
    //1. check if it's found in the database
    //2a. if it's not found, respond with 404
    //2b. if it's found check if the user accepts an xml or json
    //3. Send the required data with 200 status code

    console.log(req.header);
    console.log("Accepts? " + req.accepts('json'));
    
    const track = {
        beats: 'a lot',
        tatums: 'even more',
        segments: 'yoohooo'
    }

    res.status(404);
    res.send(track);
});

app.get('/movies', (req, res) => {
    
    console.log("query param: " + req.query.genre);

    if(req.query.genre == "comedy"){
        var movies = {
            list: ['zombieland', 'zombeavers']
        }
    }else{
        var movies = {
            list: ['zombieland', 'godzilla', 'sharknado', 'zombeavers']
        }
    }
    

    res.status(200);
    res.setHeader("Content-type", "application/json");
    res.send(movies);
});

app.get('/movies/:id', (req, res) => {
    
    console.log("ID:" + req.param.id);

    var movies = {
        title: 'zombieland',
        genre: 'comedy',
        release: 2010
    }

    res.status(200);
    res.setHeader("Content-type", "application/json");
    res.send(movies);
});

app.post('/movies', (req, res) => {
    
    console.log("The movie is successfully added");
    //console.log(req.body); -> it only works with body parser package

    res.status(200);
    res.send("OK");
});

app.delete('/movies/:id', (req, res) => {
    
    console.log("Movie is successfully deleted: " + req.params.id);

    res.status(200);
    res.setHeader("Content-type", "text/plain");
    res.send("OK");
});

app.delete('/movies', (req, res) => {
    
    console.log("All movies are successfully deleted: " + req.query.genre);

    res.status(200);
    res.setHeader("Content-type", "text/plain");
    res.send("OK");
});


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});

//REST API

//[GET] /movies
//[GET] /movies?genre
//[GET] /movies/id

//[POST] /movies
//[DELETE] /movies/id
//[DELETE] /movies?genre