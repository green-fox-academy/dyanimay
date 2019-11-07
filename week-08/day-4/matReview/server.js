const express = require('express');
const path = require('path');
const PORT = 8080;

let app = express();
app.use(express.json());
app.set('port', (process.env.PORT || PORT));

app.get('/batman', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.send('Batman changed the calendar');
});

app.post('/batman', (request, response) => {
    setTimeout(function () {
        response.header('Access-Control-Allow-Origin', '*');
        response.status(404);
        response.send();
        //response.send('Batman changed the calendar via POST');
    }, 2000);
});

app.listen(app.get('port'), () => {
    console.log(`\nServer is running\nListening on port ${PORT}`);
});