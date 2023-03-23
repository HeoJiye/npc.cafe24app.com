var mysql = require('mysql');
var connection = mysql.createConnection({
host:'nodejs-010.cafe24.com',
user:'ddwunpc',
password:'npcddwu0!',
database:'ddwunpc',
port:3306
});

connection.connect();

connection.query('SELECT * from USER', function(error, results, fields ){
if(error) {
console.log(error);
};
console.log(results);
});

connection.end();

module.exports = connection; 