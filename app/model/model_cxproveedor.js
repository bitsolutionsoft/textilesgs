
const sql=require("../config/db.js");

const Cxproveedor=function(cxproveedor){
this.idcuenta =cxproveedor.idcuenta;
this.idproveedor =cxproveedor.idproveedor;
this.total =cxproveedor.total;
this.totalabono=cxproveedor.totalabono;
this.saldo =cxproveedor.saldo;
this.estado =cxproveedor.estado;

    
}
 

Cxproveedor.create=(cxproveedor,result)=>{
    sql.query(
      `call ingreso_cuentaxproveedor(${cxproveedor.idcuenta},${cxproveedor.idproveedor},${cxproveedor.total},${cxproveedor.totalabono},${cxproveedor.saldo},"${cxproveedor.estado}","new");`,
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
    Cxproveedor.update=(cxproveedor,result)=>{
        sql.query(
            `call ingreso_cuentaxproveedor(${cxproveedor.idcuenta},${cxproveedor.idproveedor},${cxproveedor.total},${cxproveedor.totalabono},${cxproveedor.saldo},"${cxproveedor.estado}","update");`,
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
        
        Cxproveedor.findById=(id, result)=>{
        sql.query(
            `call ingreso_cuentaxproveedor(${id},${0},${0},${0},${0},"${cull}","viewone");`,
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
    
        Cxproveedor.getView=(result)=>{
            sql.query(
                `call ingreso_cuentaxproveedor(${0},${0},${0},${0},${0},"${cull}","view");`,
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
            Cxproveedor.remove=(id,result)=>{
                sql.query(
                    `call ingreso_cuentaxproveedor(${id},${0},${0},${0},${0},"${cull}","delete");`,
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
  module.exports=Cxproveedor;
 
 
 