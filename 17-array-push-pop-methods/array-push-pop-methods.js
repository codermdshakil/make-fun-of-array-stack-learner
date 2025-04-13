/**
 * Array Push and Pop methods
 * 
*/

const Stack = require('../16-array-as-stack/array-as-stack');
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
console.log(reversedText);






