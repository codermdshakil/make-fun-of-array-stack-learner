
// How to work with sort method

// const numbers = [10,20,30,40,50,60,70,80,90,100];

// just sort method will not work perpectly
// numbers.sort();
// console.log(numbers);

const numbers = [12, 48, 3, 30, 19, 25, 7, 44, 1, 27, 38, 52, 16, 5, 33];

// assending order 
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// dessending order 
// numbers.sort((a, b) => b - a);
// console.log(numbers);



// String array sort
const strings = ['apple','Cat', 'Ball', 'Apple'];
strings.sort((a, b) => {

    // best practice
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a > b) return 1;
    if(b > a) return -1;
    return 0; 
});

// console.log(strings); // [ 'apple', 'Apple', 'Ball', 'Cat' ]












