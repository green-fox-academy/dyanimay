'use strict'

const app = require('./routes'); //`Server is running on Port ${config.app.port}`)

app.listen(process.env.PORT, ()=> {
  console.log(`Server is running on Port ${process.env.PORT}`);
});