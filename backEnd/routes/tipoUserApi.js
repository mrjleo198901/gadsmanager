var express = require('express');
var router = express.Router();

var tipoUser = require('../models/tipoUser');

tipoUser.methods(['get', 'put', 'post', 'delete', 'search']);
tipoUser.register(router, '/tipoUser');

module.exports = router;