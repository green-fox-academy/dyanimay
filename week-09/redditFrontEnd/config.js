const config = {
  app: {
    port: 8080
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'db'
  }
 };

 require('dotenv').config(); // this loads the defined variables from .env
 
 module.exports = config;