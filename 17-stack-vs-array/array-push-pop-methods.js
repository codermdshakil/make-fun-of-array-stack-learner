/**
 * Array Push and Pop methods
 * 
*/

const Stack = require('../16-array-as-stack/array-as-stack');

console.time('Stack: ')
const stack = new Stack();
const text = 'Hello';

for (let i = 0; i < text.length; i++) {
    stack.push(text[i])
}


let reversedText = '';

while(!stack.isEmpty()){
    reversedText += stack.peek();
    stack.pop();
}
// console.log(reversedText);
console.timeEnd('Stack: ')

// Now reverse text using js array push, pop
console.time('Array : ')
const arr = [];
const text1 = 'hello';
for (let i = 0; i < text1.length; i++) {
    arr.push(text1[i]);
}


let reversedTestArray = '';

for (let i = arr.length - 1 ; i >= 0; i--) {
    reversedTestArray += arr[i];
}

// console.log(reversedTestArray);
console.timeEnd('Array : ')


// Time complexity
// Stack: : 0.29ms
// Array : : 0.013ms










