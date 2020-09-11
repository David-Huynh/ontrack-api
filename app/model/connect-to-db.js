'use strict';
var mysql = require('mysql');
//Database connection information
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tracker'
});
//Connects to database
connection.connect(function(err){
    if (err){
        return console.log('ERROR:' + err.message);
    }
    console.log('(Secondary)Connected to MySQL server.');
});
//Exports as module
module.exports = connection;