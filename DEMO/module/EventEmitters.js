const EventEmitter= require('events');
const http=require('http');
const express=require('express');
const app=express();

app.get("/hai",(req,res)=>{
    eventEmitter.emit("CLICK","/hai is calling");
    res.end("get method is calle")
})
app.get("/",(req,res)=>{
    eventEmitter.emit("CLICK","/ is calling");
    res.end("default router method is calle")
})
app.listen(2001)
// const server=http.createServer((req,res)=>{
//    res.end(`Helloooo`);
// });

// server.listen(2001);
class MyEventEmitter extends EventEmitter{}

var eventEmitter= new MyEventEmitter();
// eventEmitter.on("CLICK",()=>{console.log("eventEmitter")});
 eventEmitter.on("CLICK", (data)=>display(data));
// eventEmitter.emit("CLICK","HI");

function display(message){
    console.log("object", message)
}