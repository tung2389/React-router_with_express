const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URL;

function connect(){
    mongoose.connect(MONGO_URL,{ useNewUrlParser: true})
        .then(console.log("Connected successfully"))
        .catch(err => console.log(err));
}

//Connect to mongodb
connect();

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Passport config
require('./config/passportConfig')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT,function(){
    console.log("Connected");
})