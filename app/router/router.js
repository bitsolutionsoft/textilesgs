module.exports=app=>{
    const empleado=require("../controller/empleado_controller");
    const usuario=require("../controller/usuario_controller");
    const proveedor=require("../controller/proveedor_controller");

    
    app.post("/empleado",empleado.crud);
    app.get("/empleado",empleado.getView);
    app.post("/usuario",usuario.crud);
    app.get("/usuario",usuario.getView);
    app.post("/proveedor",proveedor.crud);
    app.get("/proveedor",proveedor.getView);
   
};