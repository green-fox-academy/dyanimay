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