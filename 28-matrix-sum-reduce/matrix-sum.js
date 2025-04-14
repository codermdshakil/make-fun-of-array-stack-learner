

// Matrix sum

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

// Horizontal Sum
const resultH = matrix.map(row => {
    return row.reduce((acc, cur) => {
     return acc += cur;   
    })
});
// console.log(resultH); // [ 6, 15, 24 ]

// Vertical Sum
const resultV = matrix.reduce((acc, cur) => {
    return acc.map((v, i) => cur[i] + v);
});


// Flat sum
const faltSum = matrix.reduce((acc, cur) => {
    return acc + cur.reduce((a, b) => a + b) 
}, 0)
console.log(faltSum);

