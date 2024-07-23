const express = require ('express');
const router = express.Router();
const proyectosControllers = require('../controllers/proyectosController');

//aca van las rutas de los crud
router.post('/', proyectosControllers.agregarProyectos);
router.get('/', proyectosControllers.mostrarProyectos);
router.get('/:id', proyectosControllers.mostrarunProyectos);
router.put('/:id', proyectosControllers.actualizarProyectos);
router.delete('/:id', proyectosControllers.eliminarproyectos);



module.exports = router;