const mysql=require("mysql");
const dbconfig=require("./db_config");

const connection=mysql.createConnection({
host:dbconfig.HOST,
port:dbconfig.PORT,
user:dbconfig.USER,
password:dbconfig.PASSWORD,
database:dbconfig.DB
});
function handleDisconnect(){
    connection.mysql.createConnection(connection);

connection.connect(error =>{
    if(error) {
         console.log(error);
        throw error;
       
    }
    else{
       console.log("Conectado a la base de datos"); 
    }
    
});
connection.on(error,function(err){
    if(err.code==="PROTOCOL_CONNECTION_LOST"){
        handleDisconnect();
    }else{
        throw err;
    }
});
}
module.exports=connection;