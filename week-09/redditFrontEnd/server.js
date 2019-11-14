'use strict'

const config = require('./config'); //emiatt olvassa be a config fájlt
const app = require('./routes');

app.listen(config.app.port);