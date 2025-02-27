// Understanding the Print

console.log('Hello world');
// // // to manipulate in conosle log
console.error('THis is an error');
console.warn('THis is warning');

// Understanding Let --> reassigning of the values
let age = 30;
age = 31;
console.log(age);

// Understanding Let --> reassigning of the values
// we cannot modify the values after assigning a value to it
const score=10;
score = 10;
console.log(score);

// Primitive types --> String, Boolean, Numbers, null, Undefined, SYmbol

// Manipulation of Strings 
const name = 'Akshitha';
// const age = 19;
console.log(`My name is ${name}`)
console.log('My name is '+ name +' and i am '+ age);
const hello = `My name is ${name}`;
console.log(hello);

const s = 'Hello cWorld';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,7).toUpperCase());


// Split String into an Array

console.log(s.split(''));   //--> (12) ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'W', 'o', 'r', 'l', 'd']


// Understanding Arrays