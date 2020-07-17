const EventEmitter=require('events');
const uuid=require('uuid');

class CustomerInfo extends EventEmitter{
  info(msg){
    this.emit('message',{id: uuid.v4(),msg});
  }
}
module.exports=CustomerInfo;
