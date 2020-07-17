const {getAllProducts,saveProduct,getByProductId,updateProduct,deleteProductId}=require('./productServer');
module.exports={
    products:(req,res)=>{
        const userId=req.params.id;
      getAllProducts(userId,(error, result)=>{
        if(error){
             console.log("error getUserById");
            return error; 
               }
               if(!result){
                   res.status(200).json({
                       success:0,
                       message:"User id not found..."
                   });
                }                  
                   return res.status(200).json({
                       success:1,
                       user:result
                   });
    });
    },
    addProduct:(req,res)=>{
        const data={
            productName:req.body.pName,
            productPrice:req.body.pPrice,
            productQuantity:req.body.pQuantity,
            userId:req.params.id
        }
        saveProduct(data,(error, response)=>{
            console.log("error: ", error)
                if(error){
                    return res.status(500).json({
                        success:0,
                        message:"internal server error"
                    });
                }
                if(!response){
                    return res.status(401).json({
                        success:0,
                        message:"Recode not found"
                    });
                }
                return res.status(201).json({
                    success:1,
                    message:'product save successfully'
                });
        });
    },
    getUserByProductId:(req,res)=>{
        const data={
            userId:req.params.id,
            pId:req.params.pId
        }
        getByProductId(data,(error, response)=>{
            console.log("Response:" ,response.length)
            if(error){
                console.log("error getUserById");
               return error; 
                  }
                if(response.length===0){
                    res.status(200).json({
                        success:1,
                        message:"product id not found..."
                    });
                }
                if(response){
                      return res.json({
                          success:1,
                          user:response
                      });    
                    }         
       });
    },
    updateUserByIdProduct:(req,res)=>{
        const data={
            productName:req.body.pName,
            productPrice:req.body.pPrice,
            productQuantity:req.body.pQuantity,
            pId:req.params.pId,
            userId:req.params.id
        }
        updateProduct(data,(error,result)=>{
            if(error){
                console.log("something is wromg..");
                res.status(500).json({
                    success:0,
                    message:"Internam sercer error"
                });
            }
            if(!result){
                res.status(401).json({
                    success:0,
                    message: "Record not found"
              });
            }
            res.status(200).json({
                success:1,
                message:"updated product details successfully"
            });
        });
    },
    deleteUserByProductId:(req,res)=>{
        const data={
            userId:req.params.id,
            pId:req.params.pId
        }
        console.log('deleted:',data)
        deleteProductId(data,(error, response)=>{
            console.log(response,"response", response.okPacket)
        if(error){
            console.log("error getUserById");
           return error; 
              }
            if(response.affectedRows===0){
                res.status(200).json({
                    success:1,
                    message:"product id not found..."
                });
            }
            if(response){
                  return res.json({
                      success:1,
                      message:"deleted product successfully"
                  });    
                }         
   });
    }
}