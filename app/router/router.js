module.exports=app=>{
    const empleado=require("../controller/empleado_controller");
    const usuario=require("../controller/usuario_controller");
    const proveedor=require("../controller/proveedor_controller");
    const abono=require("../controller/abono_controller");
    const producto =require("../controller/producto_controller");
    const cliente=require("../controller/cliente_controller");
    const cxproveedor =require("../controller/cxproveedor_controller");
    const dbodega=require("../controller/dbodega_controller");
    const detalle=require("../controller/detalle_controller");
    const factura=require("../controller/factura_controller");
    const permiso=require("../controller/permiso_controller");
    const precio=require("../controller/precio_controller");
    const pxcliente=require("../controller/pxcliente_controller");
    
    app.post("/empleado",empleado.create);
    app.post("/empleado/update",empleado.update);
    app.post("/empleado/delete/:id",empleado.delete)
    app.get("/empleado/view",empleado.getView);
    app.get("/empleado/:id",empleado.findOne);
  

    app.post("/usuario",usuario.create);
    app.post("/usuario/update",usuario.update);
    app.post("/usuario/delete/:id",usuario.delete);
    app.post("/usuario/login", usuario.findUser);
    app.get("/usuario/view",usuario.getView);
    app.get("/usuario/:id",usuario.findOne);

    app.post("/proveedor",proveedor.create);
    app.post("/proveedor/update",proveedor.update);
    app.post("/proveedor/delete/:id",proveedor.delete)
    app.get("/proveedor/view",proveedor.getView);
    app.get("/proveedor/:id",proveedor.findOne);
    
    app.post("/abono",abono.create);
    app.post("/abono/update",abono.update);
    app.post("/abono/delete/:id",abono.delete)
    app.get("/abono/view",abono.getView);
    app.get("/abono/:id",abono.findOne);

    app.post("/producto",producto.create);
    app.post("/producto/update",producto.update);
    app.post("/producto/delete/:id",producto.delete)
    app.get("/producto/view",producto.getView);
    app.get("/producto/:id",producto.findOne);

    app.post("/cliente",cliente.create);
    app.post("/cliente/update",cliente.update);
    app.post("/cliente/delete/:id",cliente.delete)
    app.get("/cliente/view",cliente.getView);
    app.get("/cliente/:id",cliente.findOne);

    app.post("/cxproveedor",cxproveedor.create);
    app.post("/cxproveedor/update",cxproveedor.update);
    app.post("/cxproveedor/delete/:id",cxproveedor.delete)
    app.get("/cxproveedor/view",cxproveedor.getView);
    app.get("/cxproveedor/:id",cxproveedor.findOne);

    app.post("/dbodega",dbodega.create);
    app.post("/dbodega/update",dbodega.update);
    app.post("/dbodega/delete/:id",dbodega.delete)
    app.get("/dbodega/view",dbodega.getView);
    app.get("/dbodega/:id",dbodega.findOne);

    app.post("/detalle",detalle.create);
    app.post("/detalle/update",detalle.update);
    app.post("/detalle/delete/:id",detalle.delete)
    app.get("/detalle/view",detalle.getView);
    app.get("/detalle/:id",detalle.findOne);

    app.post("/factura",factura.create);
    app.post("/factura/update",factura.update);
    app.post("/factura/delete/:id",factura.delete)
    app.get("/factura/view",factura.getView);
    app.get("/factura/:id",factura.findOne);

    app.post("/permiso",permiso.create);
    app.post("/permiso/update",permiso.update);
    app.post("/permiso/delete/:id",permiso.delete)
    app.get("/permiso/view",permiso.getView);
    app.get("/permiso/:id",permiso.findOne);
    app.get("/permiso/emp/:id",permiso.findEmp);

    app.post("/precio",precio.create);
    app.post("/precio/update",precio.update);
    app.post("/precio/delete/:id",precio.delete)
    app.get("/perpreciomiso/view",precio.getView);
    app.get("/precio/:id",precio.findOne);
    app.get("/precio/allpro/:id",precio.findAllPro);
    app.get("/precio/bypro/:id",precio.findOnePro);

    app.post("/pxcliente",pxcliente.create);
    app.post("/pxcliente/update",pxcliente.update);
    app.post("/pxcliente/delete/:id",pxcliente.delete)
    app.get("/pxcliente/view",pxcliente.getView);
    app.get("/pxcliente/:id",pxcliente.findOne);
    app.get("/pxcliente/bycl/:id",pxcliente.findC);
   
};