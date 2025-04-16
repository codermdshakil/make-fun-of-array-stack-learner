// Prototype of an array

const arr = [1, 2, 3];

// console.log(arr.constructor.prototype);
// console.log(Array.prototype);
// console.log(Object.getOwnPropertyNames(Array.prototype));


// create own prototype

Array.prototype.log = function(){
    console.log(this.join(' | '));
};

// arr.log(); // 1 | 2 | 3


// Create out own loop
const friends = ['nadim', 'noyon', 'shakil'];

Array.prototype.loop = function(cb) {
    for(let i = 0; i < this.length; i++){
        cb(this[i], i, this)
    }
}

// output using my
friends.loop( (v) => {
    console.log(v);
});

// Output :
// nadim
// noyon
// shakil







