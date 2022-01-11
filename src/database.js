const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  database :process.env.DB_DATABASE,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.export = connection;
