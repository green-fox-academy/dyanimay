'use strict';

let server = require('./server');
let port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server running on port %d', port);
});