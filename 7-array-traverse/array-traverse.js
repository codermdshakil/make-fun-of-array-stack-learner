

const numbers = [1,2,3,4,5,6,7,8,9,10];

// usinf for loop 
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// using for of
// for(const item of numbers){
//     console.log(item);
// }


// using forEach
// numbers.forEach((item) => console.log(item))


// using map
// numbers.map((item) => console.log(item))

// using reduce 
// numbers.reduce((acc, cur) => console.log(cur))


// get som of all array elements 
// let sum = 0;

// for(let item of numbers){
//     sum += item;
// }
// console.log(sum);


// get avg element number of numbers array
let sum = 0;
for(const item of numbers){
    sum += item;
}
// console.log(sum/ (numbers.length));

