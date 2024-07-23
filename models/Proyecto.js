const mongoose = require('mongoose');

//Este modelo debe ser el mismo de la base de datos

const proyectoSchema = mongoose.Schema({

    proyecto:{
        type:String,
        require:true
    },
    gestion:{
        type:String,
        require:true
    },
    novedades:{
        type:String,
        require:true
    },
    inicio:{
        type:Date,
        require:true
    },
   
},{versionkey: false});
module.exports = mongoose.model('Proyectos',  proyectoSchema )