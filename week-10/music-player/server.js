'use strict';

const server = require('./backend');
const port = 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});