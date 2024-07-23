const Proyecto = require('../models/Proyecto');


// funcion para agregar proyecto
exports.agregarProyectos = async(req, res) =>{
    try {
        let proyectos = new Proyecto(req.body)
        await proyectos.save();
        res.send(proyectos);

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un proyecto');
        
    }
}
// mostrar proyecto
exports.mostrarProyectos = async(req,res) =>{
    try {

      let proyectos  = await Proyecto.find();
      res.json(proyectos);  
        
    } catch (error) {
        console.log(error)
        res.sattus(500).send('Hubo un error al mostrar el proyecto')
        
    }
} 

//Mostrar un proyecto
exports.mostrarunProyectos = async(req,res) => {
    try {
        let proyectos = await Proyecto.findById(req.params.id);

        if(!proyectos){
            res.status(404).json({msg:"No se encuentran proyectos con ese id"});

        }
        res.send(proyectos);
       
   
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un proyecto en la DB');
    }    
}
// actualizar proyecto
exports.actualizarProyectos = async (req, res) => {
    try {
         
        const proyectos = await Proyecto.findOneAndUpdate (
        {_id: req.params.id}, req.body)

    if(!proyectos){
        res.status(500).send( "Hubo un error al consultar el proyecto")
    }else{
        res.json(proyectos);

    }

    }catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al actualizar un proyecto")
    }

}
// funcion eliminar proyecto

exports.eliminarproyectos = async(req, res) =>{

    try {

        let proyectos = await Proyecto.findById(req.params.id);
        if(!proyectos){
            res.status(404).json({msg:"El proyecto no existe no existe"});
            return
        }

        await Proyecto.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El proyecto fue eliminado"})

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un proyecto en la base de datos ')
        
    }
}