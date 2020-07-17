const path=require('path');
const fs=require('fs');
//============create folder========
// fs.mkdir(path.join(__dirname,'/customer'),{},error=>{
//   if(error){
//     throw error;
//   }
//   console.log("New File folder created")
// })
// =======writeFile========
fs.writeFile(path.join(__dirname,'/customer','cu_info.txt'),"a@gmail.com",
error=>{
  if(error) throw error;
  console.log("New File folder created")
}
)

// =======Override File info========
fs.writeFile(path.join(__dirname,'/customer','cu_info.txt'),'My Name',error=>{
  if(error) throw error;
  console.log("New File folder created")
  // append file====
  fs.appendFile(path.join(__dirname,'/customer','cu_info.txt'),'and Age',error=>{
    if(error){
      throw error;
    }
    console.log("file text append")
  }
)
//===read file===
fs.readFile(path.join(__dirname,'/customer','cu_info.txt'),'utf8',(error,data)=>{
  if(error) throw error;
  console.log("file text read", data)
}
)
//===read file===
fs.rename(path.join(__dirname,'/customer','cu_info.txt'),
          path.join(__dirname,'/customer','info.txt'),
          error=>{
            if(error) throw error;
            console.log("file renamed..");
          }
)
});
