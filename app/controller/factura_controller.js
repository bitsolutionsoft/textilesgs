const Factura = require("../model/model_factura");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Factura.create(new Factura(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Factura.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro ",...error});
            }else{
                res.status(500).send({message: "Error al consultar ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Factura.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro  ",...error});
            }else{
                res.status(500).send({message: "Error al consultar  ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Factura.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro  ",...error});
            }else{
                res.status(500).send({message: "Error al consultar  ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Factura.update( 
        new Factura(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };