'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'db', 
    password: 'Microsoft987$',
    database: 'timesheet'
});

dbConn.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Database Connected!");
});

module.exports = dbConn;