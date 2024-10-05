     //week 6 task 7
     foo();

var foo = function() {

console.log('Function expression');

};
/*The output is TypeError: foo is not a function.

This happens because of the way JavaScript handles variable declarations and function expressions during the hoisting process. 


var foo; // Declaration is hoisted, but not the assignment

foo(); // At this point, foo is undefined, so calling it results in an error */

