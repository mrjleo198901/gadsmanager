const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
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
app.use(bodyParser.json());

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/api', require('./routes/userApi'));
app.use('/api', require('./routes/tipoUserApi'));

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});