
const numbers = [1,2,3,4,5,6,7];

// 1. Copy array
const sliced = numbers.slice(2,5); // [ 3, 4, 5 ]

// 2. getting first n th element from array
const firstTwo = numbers.slice(0, 2); // [ 1, 2 ]

// 3. gettint last n'th element from array
const lastTwo = numbers.slice(-2); // [ 6, 7 ]

// 4. Removing the First Element (without modifying original)
const arr = [10, 20, 30];
const removeWithOutFirst = arr.slice(1); // [20, 30]


// 5. Creating Pagination
const items = [1, 2, 3, 4, 5, 6, 7,8,9,10];
const page = 2;
const perPage = 2;
const paginatedItems = items.slice((page - 1) * perPage, page*perPage);
// console.log(paginatedItems);

// 6. Making a Shallow Copy of Part of an Array
const nums = [0, 1, 2, 3, 4, 5];
const mid = nums.slice(2, 5);
// console.log(mid); // [2, 3, 4]

// 7. Extracting a Substring
const str = "Hello World";
const part = str.slice(0, 5);
console.log(part); // "Hello"

// 8. Getting Last Characters of a String
const file = "image.png";
const extension = file.slice(-3);
// console.log(extension); // "png"

// 9. Slicing in a Chain
const arr1 = [1, 2, 3, 4, 5];
const result = arr1.slice(1, 4).map(x => x * 2);
// console.log(result); // [4, 6, 8]