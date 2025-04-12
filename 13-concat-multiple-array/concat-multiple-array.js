
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];


// 1. concat()
// const combined = arr1.concat(arr2, arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 2. Spread operator - (...)
// const combined1 = [...arr1, ...arr2,...arr3]; // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 3. push
// arr1.push(...arr2, ...arr3); // // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 4. array.flat - convert array of array -> just array

// let arrays = [[1, 2], [3, 4], [5, 6]];
// let combined2 = arrays.flat(); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(combined2);

// 5. forEach + push

// let result = [];
// let arrays = [[1, 2], [3, 4], [5, 6]];

// arrays.forEach(arr => result.push(...arr)); //[ 1, 2, 3, 4, 5, 6 ]

