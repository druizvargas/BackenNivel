const mongoose = require('mongoose');
require('dotenv').config();

// conexion de base de datos

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con mogodb'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;