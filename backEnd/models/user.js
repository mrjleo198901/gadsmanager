var restful = require("node-restful")
var mongoose = restful.mongoose;
//const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    correo: String,
    password: String,
    estado: Number,
    tipoUser: mongoose.Schema.Types.ObjectId
    
});

//module.exports = restful.model('user', userSchema);
//const User = module.exports = mongoose.model('user', userSchema);

const User = module.exports = restful.model('user', userSchema);

module.exports.getResponse = function (cpass, pass) {
    var flag = false;
    if (cpass.localeCompare(pass) == 0) {
        flag = true
    }
    return flag;
}
/*
module.exports.getResponse1 = function () {
    console.log('getResponse1')
    return 'flag';
}*/

module.exports.getUserByCorreo = function (candidateUser, callback) {
    const query = {
        correo: candidateUser.correo,
        password: candidateUser.password
    }
    User.findOne(query, callback);
}

module.exports.comparePass = function (candidatePassword, password, callback) {
    if (candidatePassword.localeCompare(password) == 0) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}