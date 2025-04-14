
/**
 * Example - Array Flatmap
 * 
*/

// flatMap = Map + flat;
const arr = [1,2,3,4];

// using map + flat method
const flatMap = arr.map((x) => [x*2]).flat(); // [ 2, 4, 6, 8 ]

// using flatMap method
const flatMap2 = arr.flatMap((x) => [x*2]); // [ 2, 4, 6, 8 ]

const flatMap3 = arr.flatMap((x) => [x,x*2]); // [ 1, 2, 2, 4, 3, 6, 4, 8 ]
// console.log(flatMap3); 


