
/**
 * Delete element from an array
 * 
*/

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//* 1. last element delete from array
// numbers.pop();
// numbers.length = numbers.length - 1;



//* 2. first element delete from an array
// numbers.shift();


//* 3. using Delete
// numbers[1] = undefined;
// delete numbers[4]; 


//* 4. using filter one or many using && operator

// const filteredNumbers = numbers.filter((item) => item != 5) 
// const filteredNumbers = numbers.filter((item) => item != 5 && item != 8 && item != 9);
// console.log(filteredNumbers);

// numbers = numbers.filter(item => item != 6); // in this way i reassign with the filtered array with numbers 
// console.log(numbers);


//* 5. using splice we can delete a specific element from array

//  5.1 - Remove element using  start index index
//  const result = numbers.splice(3, 2);

//  5.2 - Remove element using value
// const deletedValue = 6;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === deletedValue){
//         numbers.splice(i, 1);
//     }
// }



// console.log(result); // result containe deleted element in a array
// console.log(numbers); // main array will return without deleted item

//* IndexOf + splice
// const indexOfItemSeven = numbers.indexOf(7);
// numbers.splice(indexOfItemSeven, 1);
// console.log(numbers); // in main numbers array 7 will is deleted




















