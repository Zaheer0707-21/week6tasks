                  // week 6 task 2
for (var i = 0; i < 5; i++) {

    setTimeout(function() {
    
    console.log(i);
    
    }, 1000);
    
    }


 /* the setTimeout callback is executed (after 1000 milliseconds),
   the loop has already completed, and the value of i is 5 (the loop condition causes it to stop at 5).
 the console.log(i) inside the setTimeout refers to the same i variable, which has been updated to 5 by the end of the loop, it logs 5 five times.*/

