const numberInput=document.getElementById('number'),
textInput=document.getElementById('message'),
button=document.getElementById('button'),
response=document.querySelector('response');

button.addEventListener('click',send,false);
function send(){
const number=numberInput.value;
const text=textInput.value;
const data={
    "number":number,
    "text":text
}
fetch('/send',{
    method:'POST',
    headers:{"content-type": "application/json"},
    body:JSON.stringify(data)})
.then(res=>console.log("response SMS data is:",res))
.catch(error=>console.log(error));
}
