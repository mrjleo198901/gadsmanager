const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const emailjs = require('emailjs/email');
const config = require('../config/database');
const user = require('../models/user');

const router = express.Router();
//node-restful library methods
user.methods(['get', 'put', 'post', 'delete', 'authenticate']);
user.register(router, '/user');
//customized methods by https://twitter.com/JotaMunio
//Authenticate
router.post('/authenticate', (req, res, next) => {
    const candidateUser = {
        correo: req.body.correo,
        password: req.body.password
    }
    user.getUserByCorreo(candidateUser, (err, user) => {
        if (isEmpty(user)) {
            res.send({ success: false, msg: 'Usuario no encontrado!' });
        } else {
            var token = jwt.sign({ loggedUser: user._id }, config.secret, {
                expiresIn: 60 //1 semana
            });
            res.send({
                success: true,
                token: 'JWT ' + token,
                user: user
            });
        }
    });
});

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports = router;