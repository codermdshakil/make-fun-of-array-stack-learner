

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

for (let i = 0; i < funcs.length; i++) {

    const result = funcs[i](a, b);
    console.log(`[${funcs[i].name}] Result = ${result}`);
}


