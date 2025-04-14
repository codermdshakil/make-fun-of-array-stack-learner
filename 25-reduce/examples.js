
// Example Array Flatten using reduce

let nestedArray = [[1,2], 3, [4,5]];

// i want -> [1,2,3,4,5];

// using flat methid
const flat = nestedArray.flat(); // [ 1, 2, [ 6, 7 ], 3, 4, 5 ]
const flat2 = nestedArray.flat(2); // [ 1, 2, 6, 7, 3, 4, 5]
// console.log(flat);
// console.log(flat2);

// using reduce 
const flatArray2 = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur);
}, []);

// console.log(flatArray2); // [ 1, 2, 3, 4, 5 ]





