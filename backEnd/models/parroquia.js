var restful = require("node-restful")
var mongoose = restful.mongoose;

var subSchemaAutoridad = mongoose.Schema({
    cedula: String,
    nombre: String,
    cargo: String,
    fechaFiliacion: String,
    telefono: String,
    correo: String,
    profesion: String
}, { _id: false });
var subSchemaBarrio = mongoose.Schema({
    descripcion: String,
    nroHabitantes: Number,
    altitud: String,
    presidente: String
}, { _id: true });
var subSchemaActividadEco = mongoose.Schema({
    nombre: String,
    descripcion: String,
}, { _id: true });
var subSchemaGastro = mongoose.Schema({
    descripcion: String,
}, { _id: true });
var subSchemaTurismo = mongoose.Schema({
    descripcion: String,
}, { _id: true });
var subSchemaHistoria = mongoose.Schema({
    descripcion: String,
}, { _id: true });
var subSchemaGaleria = mongoose.Schema({
    descripcion: String,
}, { _id: true });


var parroquiaSchema = new mongoose.Schema({

    nombre: String,
    telefono: String,
    correo: String,
    latitud: Number,
    longitud: Number,

    autoridad: [subSchemaAutoridad],
    barrio: [subSchemaBarrio],
    actividadEco: [subSchemaActividadEco],
    gastronomia: [subSchemaGastro],
    turismo: [subSchemaTurismo],
    historia: [subSchemaHistoria],
    galeria: [subSchemaGaleria]

});

module.exports = restful.model('parroquia', parroquiaSchema);