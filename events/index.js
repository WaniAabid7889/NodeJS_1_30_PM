const event = require('events');
const { EventEmitter } = require('node:stream');
// console.log(event);
const emObj = new EventEmitter();

// emObj.on('event', function firstListener(...args) {
//     console.log('Helloooo! first listener',args);
//   });

// emObj.listeners('event');

// emObj.emit('event',1,2,3);


emObj.on('event', function firstListener() {
    console.log('Helloooo! first listener');
  });
  // Second listener
  emObj.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
  });
  // Third listener
  emObj.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
  });

  setTimeout(() => {
      console.log(emObj.listeners('event'));
  }, 2000);
  
  
  emObj.emit('event', 1, 2, 3, 4, 5);
