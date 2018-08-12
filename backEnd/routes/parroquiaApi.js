var express = require('express');
var router = express.Router();

var parroquia = require('../models/parroquia');

parroquia.methods(['get', 'put', 'post', 'delete', 'search']);
parroquia.register(router, '/parroquia');

module.exports = router;