
const sql=require("../config/db.js");

const Proveedor=function(proveedor){
    this.idproveedor=proveedor.idproveedor;
    this.nombre=proveedor.nombre;
    this.accion=proveedor.accion;
}

Proveedor.crud=(proveedor,result)=>{
sql.query(
    `call ingreso_proveedor(${proveedor.idproveedor},"${proveedor.nombre}","${proveedor.accion}");`,
    (error,res)=>{
        if(error){
            console.log("Hubo un error durante la operación", error.message);
            result(error, null);
            return;
        }else{
        console.log(res);
        console.log("proveedor Ingresado",{mesage: "Success",res:res});
        result(null,{message:"Success",res:res});
        }
    });
}


Proveedor.getView=(proveedor, result)=>{
    
    sql.query( 
        `call ingreso_proveedor(${proveedor.idproveedor},"${proveedor.nombre}","${proveedor.accion}");`,
        (error,res) =>{     
     if(error){
        console.log("Error: ", error);
          result(error, null);
         return;
     }

     if(res[0].length){
         var resp={message:"Success",res:res[0]};
         console.log(resp);
         result(null, resp);
         return;
     }else{
 
    result({ error: "not_found" }, null);
}
 });
}
  module.exports=Proveedor;
 
 
 