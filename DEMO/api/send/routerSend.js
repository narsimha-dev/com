require('dotenv').config();
const fs = require('fs');
const path=require('path');
const express=require('express');
const router=express.Router();
const Nexmo=require('nexmo');

const nexmo={
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
}
const key=fs.readFile(path.join(__dirname,'','private.key'),'utf8',(err, data)=> { 
    if(err) 
        console.log(err); 
    else
        console.log("data", data); 
        return data;
}); 
const sendNexmo = new Nexmo(nexmo);
const voiceNexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET,
    applicationId: process.env.APPLICATION_ID,
    privatekey:key});
  
router.get('/',(req,res)=>{
    
    res.render('index')

});
router.post('/',(req,res)=>{
console.log("========post====/sms:")
    const text=req.body.text;
    const toNo=`91${req.body.number}`;
     const from = process.env.FROM
     sendNexmo.message.sendSms(from, toNo, text, (err, responseData) => {
         console.log("response SMS ", responseData)
         if (err) {
             console.log(err);
         } else {
             if(responseData.messages[0]['status'] === "0") {
                 console.log("Message sent successfully.", req.baseUrl);
                 res.redirect(307,`${req.baseUrl}/voice`);
             } else {
                 console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
             }
         }
     })
}); 
router.post('/voice',(req,res)=>{
   console.log("===/voice", req.body)
   const number=`91${req.body.number}`;
   const voiceNumberNexmo = [
    {
      action: 'talk',
      voiceName: 'Joey',
      text:req.body.text,
    },
  ];
   voiceNexmo.calls.create(
       { to: [{ type: 'phone', number }],
         from: { type: 'phone', number },
         voiceNumberNexmo
        },(err, result) => {
          if(err){
              console.log(err);
          }
          console.log(result),
        }
   )
});

module.exports=router;
