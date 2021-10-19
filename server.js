const express=require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const socketIO= require("socket.io");


const app=express();
//app.use(cors());

app.use((req,res,next) =>{
   res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Cotrol-Allow-Headers','Content-Type, Origin, X-Requested-With, Accept');
   res.header('Access-Control-Allow-Headers', 'Content-Type','Authorization');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header('Access-Control-Allow-Methods','Access-Control-Allow-Methods','GET, PATCH, PUT, POST, DELETE, OPTIONS');

   
    
    next();
    app.options('*',cors(),(req,res)=>{
        res.header('Access-Control-Allow-Methods','Access-Control-Allow-Methods','GET, PATCH, PUT, POST, DELETE, OPTIONS');
        req.header(" Access-Control-Request-Headers", "true");
      res.header("Access-Control-Allow-Credentials", "true");
        res.send();   
    });
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req, res)=>{
    res.json({message:"Bienvenido a centro comercial y distribuidora gs"});
})   




require("./app/router/router")(app)

/** 8080 para clevercloud */
/** 3001 local */
const server=app.listen(3000,()=>{
console.log("servidor en ejecución");
});

//websocket
const io=socketIO(server)

io.on('connection',()=>{
console.log("nueva conexion " );
io.emit('announcements', { message: 'Nueva medida para vender' });
})

