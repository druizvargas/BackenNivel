const mongoose = require('mongoose');

//Este modelo debe ser el mismo de la base de datos

const tareaSchema = mongoose.Schema({

    nombre:{
        type:String,
        require:true
    },
    responsable:{
        type:String,
        require:true
    },
    fecha:{
        type:Date,
        require:true
    },
    comentarios:{
        type:String,
        require:true
    },
   
},{versionkey: false});
module.exports = mongoose.model('Tarea',  tareaSchema )