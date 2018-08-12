var express = require('express');
var router = express.Router();

var comentario = require('../models/comentario');

comentario.methods(['get', 'put', 'post', 'delete', 'search']);
comentario.register(router, '/comentario');

module.exports = router;