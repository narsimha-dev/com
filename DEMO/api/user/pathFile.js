const path=require('path');
const fs=require('fs');
const { EventEmitter } = require('events');

class UserPathFile extends EventEmitter{
  constructor(){
    super();
    this.data=null;
    this.on('userPath',(response)=>{
      this.data=response;
      this.writeUserInfoFile();
    })
  }
 writeUserInfoFile() {
  if(this.data){
    let users=`{ "USERS": ${JSON.stringify(this.data,null,2)} }`;
// =======Override File info========
fs.writeFileSync(path.join(__dirname,'/userInfo','data.json'),users,error=>{
    if(error) throw error;
    console.log("New File folder created")
    // append file====
    fs.appendFile(path.join(__dirname,'/userInfo','data.json'),users,error=>{
      if(error){
        throw error;
      }
      console.log("file info append")
    });
});
   this.emit('usserFile');
 }else{
   console.log("user info not append to fileS");
   }
  fs.open(path.join(__dirname,'/userInfo','Test.txt'), 'r', (err, fd)=> {
    if (err) {
      console.log("open file errro:" , err);
    return console.error(err);
}
fs.readFile(path.join(__dirname,'/userInfo','Test.txt'),'utf8',(error,data)=>{
      if(error) throw error;
      console.log("file text read", data)
    }
    ) 
    // Close the opened file.
fs.close(fd, function (err) {
    if (err) throw err;
});
});
  fs.stat(path.join(__dirname,'/userInfo','test.txt'),(err,data)=>{
    if(err){
      console.log("file stat error: ", err);
      throw error;
    }
    console.log("file stat is: ", data);
  })
    } 
  //============create folder========
// fs.mkdir(path.join(__dirname,'/userInfo'),{},error=>{
//   if(error){
//     throw error;
//   }
//   console.log("New File folder created")
// })
//const data=JSON.stringify(results);
  
//===read file===
// fs.readFile(path.join(__dirname,'/userInfo','data.json'),'application.json',(error,data)=>{
//     if(error) throw error;
//     console.log("file text read", data)
//   }
//   )

//===rename file===
// fs.rename(path.join(__dirname,'/userInfo','data.json'),
//           path.join(__dirname,'/customer','user.json'),
//           error=>{
//             if(error) throw error;
//             console.log("file renamed..");
//           }
// )
//});
 }
module.exports=UserPathFile;