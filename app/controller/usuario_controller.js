const Usuario = require("../model/model_usuario");


exports.crud=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const usuario=new Usuario({
        idusuario : req.body.idusuario,
        idempleado : req.body.idempleado,
        usuario : req.body.usuario,
        pass : req.body.pass,
        accion : req.body.accion,
    });

    Usuario.crud(usuario, (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.getView=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }
    const usuario=new Usuario({
        idusuario : req.body.idusuario,
        idempleado : req.body.idempleado,
        usuario : req.body.usuario,
        pass : req.body.pass,
        accion : req.body.accion,
    });

    Usuario.getView(usuario,(error,data) =>{
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