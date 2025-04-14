
// Map Filter using Reduce

const numbers = [1,2,3,4,5];

// Mapped
const squares = numbers.reduce((acc, cur) =>{
    acc.push(cur * cur);
    return acc;
}, []);

// console.log(squares); // [ 1, 4, 9, 16, 25 ]


// Filter
const odds = numbers.reduce((acc, cur) => {

    if(cur%2> 0){
        acc.push(cur)
    }
    return acc;
}, []);

// console.log(odds); // [ 1, 3, 5 ]


// Big Array


// Map and Filter Chain - Time Efficiency


// Map and Filter Reduce - Time Efficiency