require('dotenv').config();
const mysql = require('mysql');

var con = mysql.createConnection({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  port:process.env.DB_PORT
});

con.connect(err=> {
    if (err){
      console.log("db connections was failed!!"+JSON.stringify(err,undefined,2));
       throw err;
    }
    else{
  console.log("db Connected!");
  }
});
// function close(){
//   return conn.disconnect();
// }

module.exports={
  con
}