
// Compose functions

// Understand compose concepts
const add10 = (n) => n+10;
const times3 = (n) => n *3;
const div2 = (n) => n/2;

const n = 5;
// concepts
const x = div2(times3(add10(n)));
console.log(x);

// Pipe function - shortest way
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), n);
const r1 = pipe(add10, times3, div2)(n);
// console.log(r1);


// Compose Function - Long way

const compose = (...fns) => {
    return x => {
        return fns.reduce((v, f) => f(v), x);
    }
}

const r2 = compose(add10, times3, div2)(n);
// console.log(r2);

