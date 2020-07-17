const express=require('express');
const router=express.Router();
const {userloginInfo,getAllUsers,createUser,getUserById,updateUser,deletUser}=require('./userController');

router.post('/login',userloginInfo);
router.get('/',getAllUsers);
router.post('/add',createUser);
router.get('/:id',getUserById);
router.patch('/:id',updateUser);
router.delete('/:id',deletUser);

module.exports=router;