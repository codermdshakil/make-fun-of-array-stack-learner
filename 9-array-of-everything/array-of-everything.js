

function getTen(){
    console.log('hello ten');
}

const arr = [10, '10', getTen, {ten:10}, [10, 10]];
// console.log(arr);

// Array of objects
const favChannels = [
    {name:'Shakil', channel:'youtube.com/shakil'},
    {name:'Nadim', channel:'youtube.com/nadim'},
    {name:'Noyon', channel:'youtube.com/noyon'},
    {name:'Mahfuj', channel:'youtube.com/mahfuj'},
];

// Array of functions

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;


const funcs = [sum, sub, mul, div, mod];
const a = 10, b= 20;

// for (let i = 0; i < funcs.length; i++) {

//     const result = funcs[i](a, b);
//     console.log(`[${funcs[i].name}] Result = ${result}`);
// }


// array of array or two dimentional array
const pointTable = [
    [0,0],
    [3,5],
    [5,7],
    [10,23]
];


// one dementaion traverse
for(let i = 0; i < pointTable.length; i++){
    // console.log(`Point ${i} -> x = ${pointTable[i][0]}, y = ${pointTable[i][1]}`);
}


// two dimentional traverse

const matrix= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

// console.log(matrix);

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[i][j]);
    }
}


// martix sum

const matrixA = [
    [4, 6],
    [5, 6],
    [7, 8],
];

const matrixB = [
    [9, 8],
    [7, 6],
    [5, 4],
];


const matrixSum = (matrixA, matrixB) => {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        
        for (let j = 0; j < matrixA[i].length; j++) {
            const row = [];
            row.push(matrixA[i][j] + matrixB[i][j])
            result.push(row)
        }
    }
    return result;
}

const matrixSumResult = matrixSum(matrixA, matrixB);
console.log(matrixSumResult);


