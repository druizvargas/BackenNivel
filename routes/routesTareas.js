const express = require ('express');
const router = express.Router();
const tareasController = require('../controllers/tareaController');

//aca van las rutas de los crud
router.post('/', tareasController.agregarTareas);
router.get('/', tareasController.mostrarTareas);
router.get('/:id', tareasController.mostrarunaTarea);
router.put('/:id', tareasController.actualizarTareas);
router.delete('/:id', tareasController.eliminarTareas);



module.exports = router;