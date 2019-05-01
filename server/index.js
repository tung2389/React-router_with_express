const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const dashboard = require('./routes/dashboard');
const login = require('./routes/login');
const logout = require('./routes/logout');
const register = require('./routes/register');

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

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use('/api/dashboard', dashboard);
app.use('/api/login', login);
app.use('/api/logout', logout);
app.use('/api/register', register);

//Static react files
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '/build/index.html'));
});


app.listen(PORT,function(){
    console.log("Connected");
})