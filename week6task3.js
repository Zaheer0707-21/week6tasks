  // week 6 task 3
  console.log('Start');

setTimeout(() => {

console.log('Middle');
}, 0);

console.log('End');
/*console.log('Start'); is executed first, so "Start" is printed.
 setTimeout(() => { console.log('Middle'); }, 0); schedules the callback function (console.log('Middle')) to be executed after 0 milliseconds.
  console.log('End'); is executed next, so "End" is printed immediately after "Start."
Once the synchronous code is finished, the event loop checks for any pending asynchronous tasks. The callback for the setTimeout is then executed, printing "Middle" last.
Thus, despite the 0 milliseconds in the setTimeout, the callback still waits until the synchronous code finishes.*/