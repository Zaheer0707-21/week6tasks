      // week 6 task 6
      let a = { foo: 'bar' };
let b = { foo: 'bar' };
console.log(a == b);
console.log(a === b);

/* a == b is false: In JavaScript, the == operator checks for loose equality, 
but when comparing objects (like a and b), it compares their references, not their contents.
 Even though both a and b have the same properties, they are distinct objects stored in different locations in memory. So a == b is false because their references are different.

 a === b is false: The === operator checks for strict equality, which also considers type and reference.
  Like ==, it also compares the references of objects. Since a and b are two separate objects, the strict equality check results in false.*/