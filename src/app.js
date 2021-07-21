const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const passport = require("passport");
const port = 8201;

const app = express(); 

app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port);