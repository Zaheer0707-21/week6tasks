                       //week6 task 1              
  console.log(a)
   
   var a = 10
    function foo(){
        console.log(a);
        var a = 20;
    }

     foo()
      console.log(a)

       /* First in 2nd line  console.log(a) before function foo():At this point, the variable a is declared using var a = 10.
       Due to JavaScript's hoisting mechanism, the declaration of a is moved to the top of the scope (before the console.log(a)),
        so the variable a is defined but not yet assigned the value 10. Therefore, it logs undefined.


Inside the foo() function:

The variable a is declared inside the function using var, which creates a new local scope for a. 
Just like before, due to hoisting, the declaration of a within the function is moved to the top of the function scope.
 So when console.log(a) is called inside foo(), a is undefined (because it is declared but not yet assigned the value 20).
After logging, a is assigned the value 20, but this does not affect the output because the console.log(a) was called before the assignment.

 Calling Foo():
The second console.log(a) inside the function will log undefined because of the local a variable.

 Final console.log(a):
After the function foo() finishes execution, the global a remains unchanged, with the value 10. So the final console.log(a) logs 10.*/

