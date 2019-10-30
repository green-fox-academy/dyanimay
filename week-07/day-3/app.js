const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('ok!');
});

app.listen(PORT, () => {
  console.log(`The server is listening to port ${PORT}`);
});