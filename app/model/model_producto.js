
const sql=require("../config/db.js");

const Producto=function(producto){
    this.idproducto = producto.idproducto;
    this.idproveedor = producto.idproveedor;
    this.nombre =producto.nombre;
    this.estilo =producto.estilo;
    this.color = producto.color;
    this.cant_rollo = producto.cant_rollo;
    this.cant_yarda = producto.cant_yarda;
    this.precio_compra_r = producto.precio_compra_r;
    this.precio_compra_y =producto.precio_compra_y;
    this.ubicacion =producto.ubicacion;
    
}
 

Producto.create=(producto,result)=>{
    sql.query(
      `call ingreso_producto(${producto.idproducto},${producto.idproveedor},"${producto.nombre}","${producto.estilo}","${producto.color}",${producto.cant_rollo},${producto.cant_yarda},${producto.precio_compra_r},${producto.precio_compra_y},"${producto.ubicacion}","new");`,
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
    Producto.update=(producto,result)=>{
        sql.query(
            `call ingreso_producto(${producto.idproducto},${producto.idproveedor},"${producto.nombre}","${producto.estilo}","${producto.color}",${producto.cant_rollo},${producto.cant_yarda},${producto.precio_compra_r},${producto.precio_compra_y},"${producto.ubicacion}","update");`,
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
        
        Producto.findById=(id, result)=>{
        sql.query(
            `call ingreso_producto(${id},${0},"${null}","${null}","${null}",${null},${0},${0},${0},"${null}","viewone");`,
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
    
        Producto.getView=(result)=>{
            sql.query(
                `call ingreso_producto(${0},${0},"${null}","${null}","${null}",${null},${0},${0},${0},"${null}","view");`,
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
            Producto.remove=(id,result)=>{
                sql.query(
                    `call ingreso_producto(${id},${0},"${null}","${null}","${null}",${null},${0},${0},${0},"${null}","delete");`,
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
  module.exports=Producto;
 
 
 