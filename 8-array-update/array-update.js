// array fill manual way
const arr1 = new Array(10);

// update array value using false value
for(let i = 0 ; i < arr1.length; i++){
    arr1[i] = false;
}

// using fill update array

const arr2 = new Array(10);

arr2.fill(2) // fill all array element with 2 value 
arr2.fill(5, 3, 8); // after index 3 to 8 array element will be 5
// console.log(arr2);


// update using index
const names = ['shakil', 'noyon', 'nadim'];
names[0] = false;
// console.log(names);
