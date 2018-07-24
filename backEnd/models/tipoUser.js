var restful = require("node-restful")
var mongoose = restful.mongoose;

var tipoUserSchema = new mongoose.Schema({

    descripcion: String,
});

module.exports = restful.model('tipoUser', tipoUserSchema);