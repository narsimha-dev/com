const express=require('express');
const router = express.Router({mergeParams: true});
const {products,addProduct,getUserByProductId,updateUserByIdProduct,deleteUserByProductId}=require('./productController');
//apply midleware
const {userValidToken}=require('../json/userToken');

router.get('/',userValidToken,products);
 router.post('/add',userValidToken,addProduct);
 router.get('/:pId',userValidToken,getUserByProductId);
 router.patch('/:pId',userValidToken,updateUserByIdProduct);
 router.delete('/:pId',userValidToken,deleteUserByProductId);

module.exports=router;