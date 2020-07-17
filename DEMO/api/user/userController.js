require('dotenv').config();
const eventEmitter=require('events').EventEmitter;
const {userlogin,getUsers,create,getUserById,updateUserById,deleteUserById}=require('./userService');
const {genSaltSync,hashSync,compareSync}=require('bcrypt');
const {sign}=require('jsonwebtoken');
const UserPathFile=require('../user/pathFile');
const { userInfo } = require('os');
const Todo=require('../../todo/Todo');

const uPath=new UserPathFile();
const userInfos=()=>{
    const ua=new Todo('a','a@a.com');
    const ub=new Todo('b','b@b.com');
    const uc=new Todo('c','c@c.com');
    
    console.log(ua.logout());
    console.log(ua.name);
    console.log(uc.login());
}
module.exports={
    userloginInfo:(req,res)=>{
     const name=req.body.name;
     const password=req.body.password;
     userlogin(name,(error,result)=>{
         if(error)
             return res.status(500).json({
                 success:0,
                 message:"Internal server error"
             });
         
         if(!result)
            return res.status(401).json({
                 success:0,
                 message:"You myust pass username/ password"
             });
         
         const data=compareSync(password,result.password);
         if( (name===result.name) && data){
             const token=sign({data:result}, process.env.SECRET_KEY,{expiresIn:process.env.TOKEN_TIMEOUT})
         return res.status(200).json({
             success:1,
             message:"Login successfully",
             Token:token
         })
         }
            return res.status(401).json({
                success:0,
                message:"Invalid username/ password"
            });        
     })
    },
    getAllUsers:(req,res)=>{
        userInfos();
        getUsers((error,results)=>{
     if(error)
         return res.status(500).json({
             success:0,
             message:"Inrenal server occuring.."
         }); 
     
      // write userInfo file
    if(results){       
      // uPath.emit('userPath',results)
     return res.status(200).json({
         success:1,
         users:results
             });
    }
        });
    },
    createUser:(req,res)=>{
        const body=req.body;
        const pwd_encript=genSaltSync(10);
        body.password=hashSync(body.password,pwd_encript);
           create(body,(error,result)=>{
            if(error)
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
        
            if(result.affectedRows===1){
               uPath.emit('userPath',result)
            return res.status(201).json({
                success:1,
                message: "user records are saved.."
            });
        }
        });     
       },
    getUserById:(req,res)=>{
    const userId=req.params.id;
    getUserById(userId,(error, result)=>{
        if(error)
            return res.staue(500).json({
                success:0,
                message:"Internal server occuring.."
            }); 
               
               if(!result)
                 return res.status(200).json({
                       success:0,
                       message:"User id not found..."
                   });
                
                   return res.json({
                       success:1,
                       user:result
                   });
    });
    },
    updateUser:(req,res)=>{
        const userId=req.params.id;
        const userName=req.body.name;
        const data={
            id:userId,
            name:userName
        }
        updateUserById(data,(error,result)=>{
            if(error)
                return res.status(500).json({
                    success:0,
                    message:"Internam sercer error"
                });
            
            if(!result)
                    return res.status(401).json({
                    success:0,
                    message: "Record not found"
              });
            
            return res.status(200).json({
                success:1,
                message:"updated user details successfully"
            });        
        });
    },
    deletUser:(req,res)=>{
        const id=req.params.id;
        deleteUserById(id,(error,result)=>{
            if(error)            
            return res.status(500).json({
                    success:0,
                    message:error
                });
            
            if(error===null && result.affectedRows===0)
               return res.status(401).json({
                    success:0,
                    message: "user id not found.."
                });
            
              return res.status(200).json({
                success:1,
                message:"user deleted successfully..."
            });
            
        })
    }
}