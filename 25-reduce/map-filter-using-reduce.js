
// Map Filter using Reduce

const numbers = [1,2,3,4,5];

// Mapped
const squares = numbers.reduce((acc, cur) =>{
    acc.push(cur * cur);
    return acc;
}, []);

// console.log(squares); // [ 1, 4, 9, 16, 25 ]





// Big Array


// Map and Filter Chain - Time Efficiency


// Map and Filter Reduce - Time Efficiency