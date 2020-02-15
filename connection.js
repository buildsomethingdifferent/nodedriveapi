const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "nodedrive"
});
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log("we are not connected");
    }
});
module.exports = mysqlConnection;