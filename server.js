'use strict';
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express();
const port = process.env.PORT || 5000;


const mysql = require('mysql');
//connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tracker'
});
//Connect to database
mc.connect(function(err){
    if (err){
        return console.log('ERROR:' + err.message);
    }
    
    console.log('(Main)Connected to MySQL server.');
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./app/routes/routes.js');
routes(app);