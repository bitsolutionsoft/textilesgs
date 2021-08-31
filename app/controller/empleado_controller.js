const Empleado =require("../model/model_empleado");

exports.crud=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const empleado=new Empleado({
        idempleado : req.body.idempleado,
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        dpi : req.body.dpi,
        telefono : req.body.telefono,
        correo:req.body.correo,
        estado : req.body.estado,
        accion : req.body.accion,
    });

    Empleado.crud(empleado, (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.getView=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const empleado=new Empleado({
        idempleado : req.body.idempleado,
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        dpi : req.body.dpi,
        telefono : req.body.telefono,
        correo:req.body.correo,
        estado : req.body.estado,
        accion : req.body.accion,
    });

    Empleado.getView(empleado,(error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el empleado ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el empleado ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
/*
exports.findOne=(req, res) =>{
    Empleado.findById(req.params.empleadoId, (err, data) =>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({msg:"No se encrontro el empleado "+req.params.empleadoId,error:""+err});
            }else{
                res.status(500).send({msg: "Error al consulta el empleado "+ req.params.empleadoId, error:""+err});
            }
        }else  res.send(data);
    });
};

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Empleado.updateByID(req.params.empleadoId, 
        new Empleado(req.body),  
        (err, data) => {
            if(err){
                if(err.kind === "not_found"){
                    
                    res.status(404).send({msg:"No se encrontro el empleado "+req.params.empleadoId, error:""+err});
                }else{
                    res.status(500).send({msg: "Error al actualizar el empleado "+ req.params.empleadoId, error:""+err});
                }
            }else res.send(data);
        }
        );
    };

exports.delete =(req,res) =>{
    Empleado.remove(req.params.empleadoId, (err, data) =>{
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({msg: "No se encontro el empleado: "+req.params.empleadoId,error:""+err});
            }else{
                res.status(500).send({msg: "No se pudo eliminar el empleado: "+req.params.empleadoId,error :""+err});
            }
        }else res.send(data);
    });
};
*/