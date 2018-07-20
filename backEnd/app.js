const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

var io = require('socket.io')(3000);
var mongoAdapter = require('socket.io-mongodb');

const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

const app = express();

//Connect to database
mongoose.connect('mongodb://localhost:27017/unach', function (err, db) {
    var i = 0;
    client.on('connection', (socket) => {
        socket.on('sendAlerta', (objAlerta) => {
            i++;
            console.log(i);
            socket.emit('otherClick', i);
        });
    });
});

//Port number
const port = 3003;

//cors middleware
app.use(cors());

//body-parser middleware
app.use(bodyParser.json());

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

app.use('/api', require('./routes/userApi'));
app.use('/api', require('./routes/estudianteApi'));
app.use('/api', require('./routes/viviendaApi'));
app.use('/api', require('./routes/puntoApi'));

//start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});