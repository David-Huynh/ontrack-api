'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tracker'
});


connection.connect(function(err){
    if (err){
        return console.log('ERROR:' + err.message);
    }
    
    console.log('Connected to MySQL server.');
});





module.exports = connection;