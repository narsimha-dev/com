require('dotenv').config();
const mysql = require('mysql');
// const moment=require('moment');

// const date=moment().format('YYYYMMDDHH:mm:ssZZ');
// const dateTime=moment('2018-06-13 06:27:00').format('YYYYMMDDHH:mm:ssZZ');
// const dt=moment('Wed Jun 13 2019 06:27:00 GMT+0900').format('YYYYMMDDHH:mm:ssZZ');
// const td=moment('2010-07-30T15:05:00.000Z').format('YYYYMMDDHH:mm:ssZZ');

// console.log(date,"===", dateTime,"==", dt,"=", td)
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