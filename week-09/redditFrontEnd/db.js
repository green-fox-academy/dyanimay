const mysql = require('mysql');
const config = require('./config'); //emiatt olvassa be a config fájlt

//connect to mysql database where the infos are saved in the .env file'
let conn = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Database');
    console.log(err);
    return;
  }
  console.log('Connection to database has been established');
});
//END OF SQL

module.exports = conn; //kiexportálom a database fájlt