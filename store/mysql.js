const mysql = require("mysql");

const config = require("../config");

const dbConf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;

function handleCon() {
  connection = mysql.createConnection(dbConf);
  connection.connect((err) => {
      if(err){
        console.log("Error en DB: ", err)
      }else{
          console.log("Conectado correctamente ")
      }
  });
  connection.on("error", (err) => console.log("Error en DB : ", err));
}
