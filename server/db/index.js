var mysql = require('mysql');

db = mysql.createConnection({
  user: 'root',
  password: 'Pw0nZor1!', // add password
  database: 'chat'
});
db.connect();
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = db;
