const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let doubling = {}; //ez az object amit visszaad ha beírok valamit az inputtal
  //console.log(req.query.input);
  res.setHeader("Content-type", "application/JSON"); //ETTŐL RESTFULL DE AMÚGY NEM CSINÁL SEMMI LÁTVÁNYOSAT
  if (req.query.input !== undefined) {
      res.status(200); //EZ IS RESTFULL
      doubling['received'] = req.query.input; //receivedet irja ki, lehetne ez kiscica is
      doubling['result'] = req.query.input * 2;
  } else {
      res.status(200); 
      doubling = {
          "error": "Please provide an input!"
      }
  }
  res.send(doubling); //visszaadja a doubling objectet, ami eleinte üres volt, de beleadtunk egy received és result elemet
});

//?name=Petike&title=student
app.get('/greeter', (req, res) => { 
  //console.log(req.query); //it logs { name: 'Petike', title: 'student'}
  //console.log(req.params.name); //does it consol logs Petike? Yes it consol logs only if I lick the green button
  let greeter = {};

  res.setHeader("Content-type", "application/JSON");

  if (req.query.name && req.query.title) {
    res.status(200);
    greeter['welcome_message'] = 'Oh, hi there ' + req.query.name + ', my dear ' + req.query.title + '!';
  } else if (!req.query.name && req.query.title) { //a ! a req előtt azt jelenti hogy NINCS, NEM LÉTEZIK
    res.status(200);
    greeter['error'] = 'Please provide a name!';
  } else if (req.query.name && !req.query.title) {
    res.status(200);
    greeter['error'] = 'Please provide a title!';
  } else {
    res.status(200);
    greeter['error'] = 'Please provide a name and a title!';
  }

  res.send(greeter);
});

app.get('/appenda/:word', (req, res) => {
  let appenda = {}

  res.status(200);
  
  appenda['appended'] = req.params.word + 'a'; //azért params mert :word-öt írtunk, nem sima queryt

  res.send(appenda); //ez mindig kell
}); 

app.get('/appenda', (req, res) => {
  res.status(404);
  res.send();
});

const sum = function (number) {
  let summa = 0;
  for (let i = 1; i <= number; i++){
    summa = summa + i;
  }
  return summa;
};
console.log(sum(5));
app.post('/dountil/:action', (req, res) => {
  let dountil = {};

  res.status(200);

  if (req.params.action == sum){
    dountil['until'] = sum(req.body.until) ;
  }

  res.send(dountil);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});