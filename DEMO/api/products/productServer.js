const {con}=require('../../db/db');

module.exports={
    getAllProducts:(id,response)=>{
        con.query('select * from product where u_id=?',
        [id],
        (error,rows,fileds)=>{
            if(error){
                console.log("getUserById getting error");
                return response(error);
            }
            return response(null, rows);
        });     
},
saveProduct:(data,response)=>{
    const storeUId=localStorage.getItem("USER_ID");
    console.log(storeUId,",", data.userId)
    if(data.userId===storeUId){
    console.log("productservice: ", data.userId)
    con.query(`insert into product(pName,pPrice,pQuantity,u_id)
     values(?,?,?,(select id from user where id=?))`,
    [data.productName,
     data.productPrice,
    data.productQuantity,
    data.userId],
    (error,row,fileds)=>{
        if(error){
            console.log("getUserById getting error");
            return response(error);
        }
        return response(null, row);
    }); 
}else{
    console.log("getUserById getting error");
}    
},
getByProductId:(data,response)=>{
    con.query('SELECT * FROM product where pId=? AND u_id=?',
    [data.pId,
    data.userId],
    (error,rows,fileds)=>{
        if(error){
            console.log("getUserById getting error");
            return response(error);
        }
        return response(null, rows);
    });     
},
updateProduct:(data,response)=>{
    con.query(`update product set pName=?,pPrice=?,,pQuantity=? where pId=? AND u_id=?`,
    [data.productName,
     data.productPrice,
    data.productQuantity,
    data.pId,
    data.userId],
(error,result,fileds)=>{
    if(error){
        console.log("updateUserById error");
        return response(error);
    }
    return response(null, result);
});
},
deleteProductId:(data,response)=>{
    con.query('delete FROM product where pId=? AND u_id=?',
    [data.pId,
    data.userId],
    (error,row,fileds)=>{
        if(error){
            console.log("Delete user error");
            return response(error);
        }
        console.log("deletd row: ", row)
        return response(null, row);
    });

}
}