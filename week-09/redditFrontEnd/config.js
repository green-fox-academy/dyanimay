const env = require("dotenv").config(); // this loads the defined variables from .env
const config = {
  app: {
    port: parseInt(process.env.PORT)
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
};

module.exports = config;
