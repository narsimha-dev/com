require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const app= express();
const ejs=require('ejs');
const {con}=require('./db/db');
const Book=require('./Book');
const {customeFileds}=require('./CustomeBook');
const router=require('./send/routerSend');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname+'/public'));

app.use('/send',router);
app.post('/book/add',(req,res)=>{
    console.log(process.env.DB_DATABASE)
    const name=req.body.name;
    const author=req.body.author;
    const numberOfPages=req.body.numberOfPages; 
    const book=new Book(name,author,numberOfPages,customeFileds.publishDate());
     con.query(`insert into book(book_name,book_author,book_pageNo,book_publisher) values(?,?,?,?)`,
        [book.name,book.author,book.numberOfPages,book.publisher],
          (error, result,fileds)=>{
                if(error) throw error;
                console.log("book data", result)
                res.status(201).json({
                    success:1,
                    message:'Successfully save'
                });
            });
});

app.listen(2000,()=>{
    console.log("this server is running...")
})