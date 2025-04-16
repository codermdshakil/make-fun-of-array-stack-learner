
// Static Method vs Instance Methods

// What is static method?
// - this methods are class method but accessible every where wihtout creating instance

// create a new instance
const arr = [];
// arr.concat()// it's a Instance method
// Array.from() // it's directly comes from array object that's why it's static method


// Example of javascript static method
// Array.from()

const s = Array.from('stack learner'); // [ 's', 't', 'a', 'c', 'k', ' ', 'l', 'e', 'a', 'r', 'n', 'e', 'r' ]

// const set = new Set(['foo', 'bar', 'baz', 'foo']); // set removes duplicate elemnt
// const s1 = Array.from(set);  // [ 'foo', 'bar', 'baz' ]

const mapper = new Map([
    ['1','a'],
    ['2','b'],
]);
// const s2 = Array.from(mapper.values()); // // gives values [ 'a', 'b' ]



