

const names = [
    'Stack Learner',
    'Stack School',
    'Stack Consultancy',
    'Stack Solution',
];

// How we do it on for loop
// --------------------------

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// }

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i+1} : ${names[i]}`);
// }


// Iterating logic -> Bussiness Logic

// how forEach concepts come
// forEach [concepts]

// forEach methos implementation
console.time('ForEach Manual using Concept: ');
function reuse(arr, logic){
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);        
    }
}



// function log(value){
//     console.log(value);
// }

// function logic(value, index, arr){
//     console.log(`Value: ${value}, Index: ${index}, Arr:${arr}`);
// }

// reuse([1, 2], log);
// reuse(['one', 'two', 'three'], logic);
// console.timeEnd('ForEach Manual using Concept: ');

// // using forEach methos print names index and array
// console.time('ForEach : ');
// names.forEach((v, idx, arr) =>{
//     console.log(`Value: ${v}, Index: ${idx}, Arr:${arr}`);
// })
// console.timeEnd('ForEach : ');


// Time Complexity here also won forEach method
// ForEach Manual using Concept: : 15.182ms
// ForEach : : 2.751ms



// create my own forEach funcion
function myForEach(arr, cb){
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);        
    }
}


const nums = [1,2,3,4];
let sum = 0;

// function sumFunc(v){
//     sum += v;
// }

// myForEach(nums, sumFunc);
// console.log(sum);

myForEach(names, (v) => {
    console.log(v);
})

// build in forEach
names.forEach((v) => console.log(v))


// Why forEach comes?
// - bar bar jeno loop lekhte na hoy + reuseable 
// - forEach use for traverse
// 
// 1. Implementation of forEach 
// 2. forEach method how comes



