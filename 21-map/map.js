
const names = [
    'Stack Learner',
    'Stack School',
    'Stack Consultancy',
    'Stack Solution',
];

// Extract length -> [13,12,17,14,10]
// Get UpperCase Version -> ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION'];
// Get Sliced Version -> ['Learner', 'School', 'Consultancy', 'Solution', 'Tech']

// ForEach implementation
function reuse(arr, logic){
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr);        
    }
}

// Example one
const result1 = [];
reuse(names, (value) => {
    result1.push(value.length);
})
// console.log(result1); // [13,12,17,14,10]

// Example two
const result2 = [];
reuse(names, (value) => {
    result2.push(value.toUpperCase());
})
// console.log(result2); // ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION'];


// Example Three
const result3 = [];
reuse(names, (value) => {
    // result3.push(value.substr(6));
    result3.push(value.slice(6, value.length));
})
// console.log(result3); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]


// ForEach + Map implementation
function reuseAndMap(arr, logic){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i], i, arr))    
    }
    return result;
}

// using reuseAndMap funcion

const lengths = reuseAndMap(names, (v) => v.length); 
// console.log(lengths); // [ 13, 12, 17, 14 ]
const getUpperNames = reuseAndMap(names, (v) => v.toUpperCase()); 
// console.log(getUpperNames);// // ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION'];
const sliced = reuseAndMap(names, (v) => v.substr(6));
// console.log(sliced); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]



// Now using map mathod
const length1 = names.map((v) => v.length); //  // [ 13, 12, 17, 14 ]
const getUpperNames1 = names.map((v) => v.toUpperCase()); // ['STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION'];
const sliced1 = names.map((v) => v.substr(6)); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]

// console.log(length1);
// console.log(getUpperNames1);
// console.log(sliced1);


