require('dotenv').config();
const {verify}=require('jsonwebtoken');
// const LocalStorage=require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');

module.exports={
userValidToken:(req,res,next)=>{
    // resp.setHeader('Content-Type', 'application/json');
    //const userId=req.params.id;
    const userId=localStorage.getItem("USER_ID");
    let token=req.get("authorization");
    if(token){
        token=token.slice(7);
        verify(token,process.env.SECRET_KEY,(error,response)=>{
           const jokenUserId=response.data.id;
           localStorage.setItem("USER_ID",jokenUserId);
           const getStoreId=localStorage.getItem("USER_ID");
           console.log("localStorage: ",getStoreId) 
           if(error){ 
                res.status(401).json({
                    success:0,
                    message:"Invalid Token are passing.."
                });
            }
            
            if(response){
            if(parseInt(userId)!==jokenUserId){
                res.status(401).json({
                    success:0,
                    message:"Invalid Token are passing by user"
                });
            }
        }

                 next();
        })
    }else{
        res.status(403).json({
            success:0,
            message:"Access denied unauthrozation user.. "
        });
    }
},
}