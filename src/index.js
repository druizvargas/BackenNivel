const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

//creamos nuestro servidor
const app = express();

const port = process.env.PORT || 5000;


//enlazamos la conexion de base de datos
conectarBD();
app.use(cors());
app.use(express.json());

//rutas 
app.use('/api/tareas', require('../routes/routesTareas'));
app.use('/api/proyectos', require('../routes/routesProyectos'));





//ruta para verificar el servidor en la web
app.get('/', (req,res) => {
   res.send("Hola mundo desde la web");
});

app.listen(port,() =>{
    console.log('El servior esta conectado');
})