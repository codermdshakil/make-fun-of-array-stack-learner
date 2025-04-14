/***
 * Understand the concepts of Reduce
 *
 * */

// Reduce return one single item it can be total, array, object etc.


// 1. sum of array element using reduce
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((acc, val) => acc+val);
// console.log(sum);

// 2. avg of array element using reduce
const avg = sum / (numbers.length);
// console.log(avg); // 5.5

//3. Convert Array to Object
const numbersObject = numbers.reduce((acc, value) =>{
    acc[value]= value;
    return acc;
}, {});

// console.log(numbersObject);

// 4. find max value from array

// const nums = [10, 20, 30, 50, 100, 40];
// const max = nums.reduce((acc, cur) => Math.max(acc, cur))
// console.log(max); // Output: 100



//5. Count Occurrences of Elements 


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana','apple', 'apple'];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count); // Output: { apple: 4, banana: 2, orange: 1 }

const numbers1 = [1,2,3,4,5];
function sumFunc(accumulator, currentValue, index){
    console.log(` I : ${index}, acc: ${accumulator}, cur: ${ currentValue}`);
    return accumulator + currentValue;
} 

const sum1 = numbers1.reduce(sumFunc, 10);
console.log(sum1);










