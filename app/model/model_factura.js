
const sql=require("../config/db.js");

const Factura=function(factura){
    this.idfactura  =factura.idfactura;
    this.idcliente  =factura.idcliente;
    this.idempleado =factura.idempleado;
    this.fecha      =factura.fecha;
    this.total      =factura.total;
    this.estado     =factura.estado;
    
}
 

Factura.create=(factura,result)=>{
    sql.query(
      `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${detalle.estado}","new");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error.message);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("Ingresado",{mesage: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    Factura.update=(factura,result)=>{
        sql.query(
            `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${detalle.estado}","update");`,
            (error,res)=>{
                if(error){
                    console.log("Hubo un error durante la operación", error.message);
                    result(error, null);
                    return;
                }else{
                console.log(res);
                console.log(" Ingresado",{message: "Success",res:res});
                result(null,{message:"Success",res:res});
                }
            });
        }
        
        Factura.findById=(id, result)=>{
        sql.query(
            `call ingreso_factura(${id},${0},${0},"${null}",${0},"${null}","viewone");`,
            (error,res)=>{
                if (error){
                    console.log(error);
                    result(error,null);
                    return
                }
                if(res[0].length){
                    console.log(res[0]);
                    result(null, {message:"Success",res:res[0]});
                }else{
                    result({error:"not_found"},null);
                }
            }
        );
        }
    
        Factura.getView=(result)=>{
            sql.query(
                `call ingreso_factura(${0},${0},${0},"${null}",${0},"${null}","view");`,
                (error,res)=>{
                    if (error){
                        console.log(error);
                        result(error,null);
                        return
                    }
                    if(res[0].length){
                        console.log(res[0]);
                        result(null, {message:"Success",res:res[0]});
                    }else{
                        result({error:"not_found"},null);
                    }
                }
            );
            }
            Factura.remove=(id,result)=>{
                sql.query(
                    `call ingreso_factura(${id},${0},${0},"${null}",${0},"${null}","delete");`,
                    (error,res)=>{
                    if(error){
                        console.log(error);
                        result(null, {message:"Success",res:res[0]});
                        return;
                    }else{
                        result(null,{message:"Success",res:res});
                    }
                }
                    );
        
            }
  module.exports=Factura;
 
 
 