'use strict'

const app = require('./server/routes'); // ez kell a routes végére module.exports = app;
require('dotenv').config();

app.listen(process.env.PORT, ()=> {
  console.log(`Server is running on Port ${process.env.PORT}`);
});