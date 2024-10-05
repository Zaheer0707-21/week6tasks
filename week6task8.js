//week 6 task 8 


const person = {

    name: 'Alice',

    age: 25,

    address: {

        city: 'Wonderland'

    }

};

const { name, address: { city }, country = 'Unknown' } = person;

console.log(name, city, country);

/*The output is:

Alice Wonderland Unknown

 why:

name: The value of name is directly extracted from the person object (name: 'Alice'), so name will be 'Alice'.

address: { city }: This is nested destructuring. It looks into the address object within person and extracts the value of city, which is 'Wonderland'.

country = 'Unknown': There is no country property in the person object, so the default value 'Unknown' is used.*/



