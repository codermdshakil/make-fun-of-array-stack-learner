
const arr1 = [1,2,3,4,5];
const arr2 = [101,102];

// push to add value in last of array

// arr1[arr1.length] = 5;
arr1.push(10);
arr1.push(77,88);
// arr1.push(...arr2);
// console.log(arr1);


// unshift to add element in the first

const arrU1 = [5,6,7];
const arrU2 = [1,2,3,4];
arrU1.unshift(...arrU2);
// console.log(arrU1);



// using splice insert element in the given index

const arrS1 = [1,2,3,5,9];
arrS1.splice(3, 0, 4); // 3 -> index, 0 -> 0 item will be deleted, 4 -> value that i want to insert 









