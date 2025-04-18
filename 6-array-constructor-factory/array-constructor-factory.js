
//  Array constructor pattern
// It’s a way to create an array using the built-in Array constructor function.

const ar1 = new Array(5); // [ <5 empty items> ]
let arr2 = new Array(1, 2, 3); // array with element [ 1, 2, 3 ]
console.log(arr2); 

// Array Factory pattern
let numbers = [1, 2, 3];
console.log(numbers);

/**
 * Array constructor is creating array using new Array - when we know the length of array element so then we can use this pattern
 * Array Factory is creating array is just []
 */

