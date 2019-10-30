const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('OK!');
});

res.sendFile(path.join(__dirname, 'index.html'));

app.listen(PORT, () => {
  console.log(`The server is listening to port ${PORT}`);
});