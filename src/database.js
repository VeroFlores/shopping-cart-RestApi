const mysql = require('mysql');
const dotenv =require('dotenv');
 dotenv.config()
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  database :process.env.DB_DATABASE,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
});

connection.connect();

module.exports = connection;
