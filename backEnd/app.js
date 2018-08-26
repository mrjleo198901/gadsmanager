'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

//Connect to database
var promise = mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    var dbName = config.database.split('/');
    var n = dbName.length;
    console.log('Connected to database: ' + dbName[n - 1]);
});

mongoose.connection.on('error', (error) => {
    console.log('Database Error' + error)
});

//Port number
const port = 3000;

//cors middleware
app.use(cors());

//body-parser middleware
app.use(bodyParser.urlencoded({limit: '2mb'}));
app.use(bodyParser.json({limit: '2mb'}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

//Routes
app.use('/api', require('./routes/userApi'));
app.use('/api', require('./routes/tipoUserApi'));
app.use('/api', require('./routes/comentarioApi'));
app.use('/api', require('./routes/parroquiaApi'));

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});