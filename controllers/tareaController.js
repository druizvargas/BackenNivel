const Tarea = require('../models/Tarea');


// funcion para agregar tareas 
exports.agregarTareas = async(req, res) =>{
    try {
        let tareas = new Tarea(req.body)
        await tareas.save();
        res.send(tareas);

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar la tarea');
        
    }
}
// mostrar tareas
exports.mostrarTareas = async(req,res) =>{
    try {

      let tareas = await Tarea.find();
      res.json(tareas);  
        
    } catch (error) {
        console.log(error)
        res.sattus(500).send('Hubo un error al mostrar la tarea')
        
    }
} 

//Mostrar una tarea
exports.mostrarunaTarea = async(req,res) => {
    try {
        let tareas = await Tarea.findById(req.params.id);

        if(!tareas){
            res.status(404).json({msg:"No se encuentra tarea con ese id"});

        }
        res.send(tareas);
       
   
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar la tarea en la DB');
    }    
}
// actualizar tarea
exports.actualizarTareas = async (req, res) => {
    try {
         
        const tareas = await Tarea.findOneAndUpdate (
        {_id: req.params.id}, req.body)

    if(!tareas){
        res.status(500).send( "Hubo un error al consultar la tarea")
    }else{
        res.json(tareas);

    }

    }catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al actualizar una tarea")
    }

}
// funcion eliminar tarea

exports.eliminarTareas = async(req, res) =>{

    try {

        let tareas = await Tarea.findById(req.params.id);
        if(!tareas){
            res.status(404).json({msg:"La tarea no existe"});
            return
        }

        await Tarea.findOneAndDelete({_id: req.params.id});
        res.json({msg:"La tarea fue eliminado"})

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar una tarea en la base de datos ')
        
    }
}