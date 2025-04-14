// implement our own reduce

function myReduce(arr, cb, init){
    let acc = init;

    for(let i = 0; i < arr.length;i++){
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

const arr = [1,2,3,4,5];
const sum = myReduce(arr,(acc, cur) => {
    return acc += cur;  
}, 0);

console.log(sum);

