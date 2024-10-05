 // week 6 task 5
  
 console.log([] + []);

console.log([] + {});

console.log({} + []);



 /* console.log([] + []);

Output: empty 

 In Js, when you use the + operator between two arrays, it converts them to strings before concatenating them.
 Both arrays are empty, so their string representations are empty as well, resulting in an empty string.

 console.log([] + {});
Output: "[object Object]"
When you add an array ([]) and an object ({}), JavaScript tries to convert them to strings. 
The empty array becomes an empty string (""), and the object is converted to the string "[object Object]". Concatenating these results in "[object Object]".

console.log({} + []);

Output:"[object Object]"

This case is tricky due to how JavaScript interprets the code. When an empty object ({}) appears at the start of a line,
Js interprets it as a block of code (rather than an object literal). So effectively, this becomes +[], which is the unary + applied to an empty array.*/
 


