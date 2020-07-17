const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const userRouter=require('./api/user/userRouter');
const productRouter=require('./api/products/productRouter');
const sendRouter=require('./api/send/routerSend');
const ejs=require('ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
//public folder setup
 app.use(express.static(__dirname+'/public'));

app.use('/api/users',userRouter);
app.use('/api/user/:id/products',productRouter);
app.use('/send',sendRouter);

module.exports=app;