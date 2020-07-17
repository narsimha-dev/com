//module.exports="HIlkllll..";

class Todo{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.login=function(){
            console.log("Login", this.name);
        };
        this.logout=function(){
            console.log("logOUt: ", this.name);
        }
    }
}

module.exports=Todo;
