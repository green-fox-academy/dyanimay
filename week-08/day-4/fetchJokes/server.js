const express = require('express');
const PORT = 8080;

let app = express();
app.use(express.json());
app.set('port', (process.env.PORT || PORT));

app.get('/batman', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.send('Batman changed the calendar');
});

app.listen(app.get('port'), () => {
  console.log(`\nServer is running\nListening on port ${PORT}`);
});