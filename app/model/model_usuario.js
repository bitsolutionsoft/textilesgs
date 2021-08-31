const sql=require("../config/db.js");

const Usuario=function(usuario){
    this.idusuario=usuario.idusuario;
    this.idempleado=usuario.idempleado;
    this.usuario=usuario.usuario;
    this.pass=usuario.pass;
    this.accion=usuario.accion;
}

Usuario.crud=(usuario,result)=>{
sql.query(
    `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","${usuario.accion}");`,
    (error,res)=>{
        if(error){
            console.log("Hubo un error durante la operación", error.message);
            result(error, null);
            return;
        }else{
        console.log(res);
        console.log("Usuario Ingresado",{mesage: "Success",res:res});
        result(null,{message:"Success",res:res});
        }
    });
}


Usuario.getView=(usuario, result)=>{
    
    sql.query( 
        `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","${usuario.accion}");`,
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
  module.exports=Usuario;
 
 
 