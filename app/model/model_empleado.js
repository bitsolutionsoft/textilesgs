const sql=require("../config/db.js");

const Empleado=function(empleado){
    this.idempleado=empleado.idempleado;
    this.nombre=empleado.nombre;
    this.apellido=empleado.apellido;
    this.dpi=empleado.dpi;
    this.telefono=empleado.telefono;
    this.correo=empleado.correo;
    this.estado=empleado.estado;
    this.accion=empleado.accion;
}

Empleado.crud=(empleado,result)=>{
sql.query(
    `call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","${empleado.accion}");`,
    (error,res)=>{
        if(error){
            console.log("Hubo un error durante la operación", error.message);
            result(error, null);
            return;
        }else{
        console.log(res);
        console.log("Empleado Ingresado",{mesage: "Success",res:res});
        result(null,{message:"Success",res:res});
        }
    });
}


Empleado.getView=(empleado, result)=>{
    
    sql.query( 
        `call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","${empleado.accion}");`,
        (error,res) =>{     
     if(error){
        console.log( error);
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
/*
 Empleado.getAll=(empleado,result)=>{
sql.query(
    `call ingreso_empleado(${empleado.idempleado},${empleado.nombre},${empleado.apellido},${empleado.dpi},${empleado.telefono},${empleado.correo},${empleado.estado},"view");`,
    (error,response)=>{
        if(error){
            console.log("Error: ", error);
              result(error, null);
             return;
         }
         if(response[0].length){
             var res=response[0];
             var d1={message:"Success","res":response};
             result(null, d1);
             return;
         }
     
        result({ message: "not_found" }, null);
    });
 }
 
 
 
 Empleado.updateByID=(empleado, result) => {
     sql.query(
        `call ingreso_empleado(${empleado.idempleado},${empleado.nombre},${empleado.apellido},${empleado.dpi},${empleado.telefono},${empleado.correo},${empleado.estado},"update");`,
    (error, response)=>{
     if(error){
         console.log("error", error);
         result(error, null);  
         return;
     }
 
     result(null,{id: res.insertId,...{message:"Success"}});
 }
 );
 };
 
 
 Empleado.remove = (empleado, result) => {
    
    sql.query( 
        `call ingreso_empleado(${empleado.idempleado},${empleado.nombre},${empleado.apellido},${empleado.dpi},${empleado.telefono},${empleado.correo},${empleado.estado},"delete");`,
    
     (error,response) =>{
         if(error){
             console.log("error: ", error);
             result(error, null);
             return;
         }
  
      result(null,{id: res.insertId,...{message:"Success"}});
  
     });
  };*/
  module.exports=Empleado;
 
 
 