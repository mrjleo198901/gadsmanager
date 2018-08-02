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

router.post('/sendmail', (req, res, next) => {
    var sujeto = req.body.name;
    var randomPass = req.body.npass;
    var username = req.body.username;
    var server = emailjs.server.connect({
        user: "mrjleo1989@gmail.com",
        password: "00000889",
        host: "smtp.gmail.com",
        ssl: true,
        port: 465
    });

    server.send({
        text: "",
        from: "GadManager App",
        to: req.body.email,
        subject: "Recuperación de contraseña",
        attachment:
        [
            {
                data: " <table cellpadding='0' cellspacing='0' style='padding:0;margin:0;border:0;width:500px'>"
                + "<tbody>"
                + "<tr>"
                + "</tr>"
                + "<tr>"
                + "<td>"
                + "<br>"
                + "<span style='font-family:calibri;font-size:14px'><strong>Estimado(a), " + sujeto + " </strong></span>"
                + "<br><br><span style='font-family:calibri;font-size:12px'>Tu antigua clave ha sido reseteada, se ha generado una nueva clave provisional con éxito.<br><b>Usuario: </b>" + username + "<br> <b>Contraseña: </b>" + randomPass + " "
                + "<br><br>Accede con estas credenciales al siguiente link <a href='http://localhost:4200/login' target='_blank' data-saferedirecturl='http://localhost:4200/login'>http://www.managerbox.riobytes.com/login</a> para completar el proceso."
                + "<br></span><br><br><span style='font-family:calibri;font-size:12px'>Recuerda que puedes cambiar esta clave accediendo a la opcion 'Mi perfil', en el menu principal.</span>"
                + "</td>"
                + "</tr>"
                + "<tr>"
                + "</tr>"
                + "</tbody>"
                + "</table>", alternative: true
            }
        ]
    }, function (err, message) {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'not sent' });
        }
        else {
            res.json({ success: true, msg: 'sent' });
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