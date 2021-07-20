const express = require("express");
const cors = require("cors");
const passport = require("passport");
const port = 8201;

const app = express(); 

app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port);