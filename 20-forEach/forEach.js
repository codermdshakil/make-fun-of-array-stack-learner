

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
function reuse(arr){
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);        
    }
}

function logic(value, index, arr){
    console.log(`Value: ${value}, Index: ${index}, Arr:${arr}`);
}
reuse([]);
reuse(['one', 'two']);







