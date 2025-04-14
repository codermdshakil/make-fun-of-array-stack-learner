/***
 * Understand the concepts of Reduce
 *
 * */

// Reduce return one single item it can be total, array, object etc.


const numbers = [1,2,3,4,5,6,7,8,9,10];

// sum of array element using reduce
const sum = numbers.reduce((acc, val) => acc+val);
// console.log(sum);

// avg of array element using reduce
const avg = sum / (numbers.length);
// console.log(avg); // 5.5

// Convert Array to Object
const numbersObject = numbers.reduce((acc, value) =>{
    acc[value]= value;
    return acc;
}, {});

// console.log(numbersObject);






