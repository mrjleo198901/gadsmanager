var restful = require("node-restful")
var mongoose = restful.mongoose;

var comentarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    mensaje: String,
    fecha: Date
});

module.exports = restful.model('comentario', comentarioSchema);