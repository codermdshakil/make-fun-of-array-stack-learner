
/**
 * Example - Array Flatmap
 * 
*/

// flatMap = Map + flat;
const arr = [1,2,3,4];

// using map + flat method
const flatMap = arr.map((x) => [x*2]).flat(); // [ 2, 4, 6, 8 ]

