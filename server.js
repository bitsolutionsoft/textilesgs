const express=require("express");
const bodyParser= require("body-parser");
/*
const app=express();
app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Cotrol-Allow-Headers','Content-Type, Origin, X-Requested-With, Accept');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    app.options('*',(req,res)=>{
        res.header('Access-Control-Allow-Methods','Access-Control-Allow-Methods','GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();   
    });
});
*/
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req, res)=>{
    res.json({message:"Bienvenido a centro comercial y textiles gs"});
})
require ("./app/router/router")(app);

app.listen(8080,()=>{
console.log("servidor en ejecución");
});

