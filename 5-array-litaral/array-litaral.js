
// array litaral - []
// An array literal is the easiest way to create an array using square brackets []. 

const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
console.log(arr);

const names = ['shakil', 'noyon', 'nadim', 'mahfuj'];
names[4] = 'nam jani na';

console.log(names);


// get last index element from names array
console.log(names[names.length - 1]);

// calculate index and index sum

let sum = 0;
for (let i = 0; i < names.length; i++) {

    sum += i;
}

console.log('sum of index - ', sum);

