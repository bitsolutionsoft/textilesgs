module.exports=app=>{
    const empleado=require("../controller/empleado_controller");
    const usuario=require("../controller/usuario_controller");
    const proveedor=require("../controller/proveedor_controller");

    
    app.post("/empleado",empleado.create);
    app.post("/empleado/update",empleado.update);
    app.post("/empleado/delete/:id",empleado.delete)
    app.get("/empleado",empleado.getView);
    app.get("/empleado/:id",empleado.findOne);
  

    app.post("/usuario",usuario.create);
    app.post("/usuario/update",usuario.update);
    app.post("/usuario/delete/:id",usuario.delete);
    app.post("/usuario/login", usuario.findUser);
    app.get("/usuario/view",usuario.getView);
    app.get("/usuario/:id",usuario.findOne);

    app.post("/proveedor",proveedor.crud);
    app.get("/proveedor",proveedor.getView);
   
};