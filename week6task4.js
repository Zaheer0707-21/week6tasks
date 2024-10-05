    // week 6 task 4
    let arr = [1, 2, 3];
      arr[10] = 5
    console.log(arr.length);
    console.log(arr)

    /*arr[10] = 5; sets the element at index 10 to 5. 
    the length of the array is automatically updated to reflect the highest index plus one.
     Therefore, the length becomes 11, even though elements at indices 3 through 9 remain empty (undefined).
When you print the array (console.log(arr);), it shows the elements from indices 0 to 2 (1, 2, 3),
 followed by 7 empty slots (<7 empty items>) and then the element 5 at index 10.*/
  