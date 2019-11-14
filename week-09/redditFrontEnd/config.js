const config = {
  app: {
    port: 8080
  },
  // db: {
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME
  // }
 };

 require('dotenv').config(); // this loads the defined variables from .env
 
 module.exports = config;