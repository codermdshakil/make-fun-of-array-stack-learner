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
// names[0] = false;
// console.log(names);


// Fill array and update
const response = new Array(9);
response.fill(false);

for (let i = 0; i < response.length; i++) {
    const rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? 'X':'O';
};

// console.log(response);

// array is mutable

function update(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i+1}. ${arr[i]}`
    }
    return arr;
}

update(names); // [ '1. shakil', '2. noyon', '3. nadim' ]
// console.log(names);


