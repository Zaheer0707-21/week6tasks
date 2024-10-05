     //week 6 task 10
     
     (function() {
        var x = 10;
        (function() {
        console.log(x);
        var x = 20;
        console.log(x);
        })();
       })()

       /*The output is:

undefined
20

 why:

The outer IIFE (Immediately Invoked Function Expression) creates a scope where x is declared and initialized to 10.

Inside the inner IIFE, var x is declared, but it gets hoisted to the top of its own scope.
 So the console.log(x) before the assignment refers to the local x, which is hoisted and initialized as undefined at that point.

After that, x is assigned the value 20, so the second console.log(x) prints 20.*/





