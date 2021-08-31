const mysql=require("mysql");
const dbconfig=require("./db_config");
const connection=mysql.createConnection({
host:dbconfig.HOST,
port:dbconfig.PORT,
user:dbconfig.USER,
password:dbconfig.PASSWORD,
database:dbconfig.DB
});

connection.connect(error =>{
    if(error) throw error;
    console.log("Conectado a la base de datos");
});
module.exports=connection;