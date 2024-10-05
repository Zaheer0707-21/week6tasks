

  // week 6 task 9 
  const promise = new Promise((resolve, reject) => {

    console.log('Promise started');
    
    resolve('Success');
    });
    
    promise.then(res => {
    
    console.log(res);
    
    });
    
    console.log('Promise created');

    /*The output is:

Promise started
Promise created
Success


First, console.log('Promise started') runs when the promise is created.

Then, the synchronous code continues, and console.log('Promise created') runs right after.

After the synchronous code has completed, the promise resolution is processed, and console.log(res) inside .then() runs, logging 'Success'.*/




