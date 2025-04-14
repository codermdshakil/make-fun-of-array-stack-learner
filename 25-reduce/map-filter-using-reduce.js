
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
const bigArray = [];
for (let i = 0; i < 5000000; i++) {
    bigArray.push(i);
}


// Map and Filter Chain - Time Efficiency
console.time('Filer + Map :');
const oddsSquare = bigArray.filter((item) => item%2 > 0).map(item => item * item);
// console.log(oddsSquare);
console.timeEnd('Filer + Map :');



// Map and Filter Reduce - Time Efficiency
console.time('Filer + Map Using Reduce: ');
const oddsSquareUsingReduce = bigArray.reduce((acc, cur) =>{
    if(cur%2 > 0){
        acc.push(cur*cur);
    }
    return acc;
},[]);
// console.log(oddsSquareUsingReduce);
console.timeEnd('Filer + Map Using Reduce: ');

// Time efficiency
// Filer + Map : 1.003s
// Filer + Map Using Reduce: 208.542ms - WIN
