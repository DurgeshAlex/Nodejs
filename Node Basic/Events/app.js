const EventEmitter = require('events');

const eventEmitter =new EventEmitter();
eventEmitter.on('print',()=>{
    console.log("Print event got fiered");
})
eventEmitter.emit('print');