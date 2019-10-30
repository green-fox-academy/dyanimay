const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send(200);
  res.
  res.send('ok!');
});

app.get('/v1/audio-analysis/', (req, res) => {
  //res.send('a big fuckin JSON');
  //1.check if it is found in the database
  //2a.if it is not found, responde with 404
  //2b. if it is found check if the user accepts an xml or jason
  //3. Send the required dta with 200 status code

  console.log(req.header);
  console.log('Accepts?' = req.accepts('json'));

  const track = {
    beats: 'a lot',
    tatums: 'even more',
    segments: 'yoohoo'
  }
  res.status(404);
  res.send(track);
})

app.listen(PORT, () => {
  console.log(`The server is listening to port ${PORT}`);
});

// http://www.johnyka.org:8080/v1/audio-analysis/?include=beats
// v1/audio-analysis/ -> Query Path
// ?include=beats -> Query Parameters

//REST API

//[GET] /movies
app.get('/movies', (req, res) => {
  const movies = {
    list: ['zombieland', 'godzilla', 'sharknado', 'zombeavers']
  }
  
  res.status(200);
  res.setHeader('Content-type', 'application/json');
  res.send(movies);
});
//[GET] /movies?genre=comedy
app.get('/movies', (req, res) => {
  console.log('query param: ' + req.query.genre);
            
  const movies = {
    list: ['zombieland', 'zombeavers']
  };
            
  res.status(200);
  res.setHeader('Content-type', 'application/json');
  res.send(movies);
  });
//[GET] /movies/id
app.get('/movies/:id', (req, res) => {
  console.log('ID: ' + req.param.id);

  var movies = {
    title: 'zomieland',
    genre: 'comedy',
    release: 2010
  }

  res.status(200);
  res.setHeader('Content-type', 'application/json');
  res.send(movies);
});

//[POST] /movies
app.post('/movies', (req, res) => {
  console.log('The movie is successfully added.');
  console.log(req.body);

  var movies = {
    title: 'zomieland',
    genre: 'comedy',
    release: 2010
  }

  res.status(200);
  res.send('ok');
});
//[DELETE] /movies/id
app.delete('/movies/:id', (req, res) => {
  console.log('The movie is successfully deleted: ' + req.param.id);

  var movies = {
    title: 'zomieland',
    genre: 'comedy',
    release: 2010
  }

  res.status(200);
  res.setHeader('Content-type', 'text/plain');
  res.send('ok');
});

//[DELETE] /movies/genre
app.delete('/movies/:id', (req, res) => {
  console.log('All movies are successfully deleted: ' + req.query.genre);

  var movies = {
    title: 'zomieland',
    genre: 'comedy',
    release: 2010
  }

  res.status(200);
  res.setHeader('Content-type', 'text/plain');
  res.send('ok');
});