const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'1234',
    database: 'reactproject',
});
connection.connect((error) => {
    if(error) throw error;
    console.log('Connected!!!');

});
const passport = require("passport");
const port = 8201;

const app = express(); 

app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port);