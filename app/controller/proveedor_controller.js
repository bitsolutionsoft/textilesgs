const Proveedor = require("../model/model_proveedor");

exports.crud=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const proveedor=new Proveedor({
        idproveedor : req.body.idproveedor,
        nombre : req.body.nombre,
        accion : req.body.accion,
    });

    Proveedor.crud(proveedor, (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.getView=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const proveedor=new Proveedor({
        idproveedor : req.body.idproveedor,
        nombre : req.body.nombre,
        accion : req.body.accion,
    });

    Proveedor.getView(proveedor,(error,data) =>{
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