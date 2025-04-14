
/**
 * Reduce right: iterate from right
 * */ 

// understand reduce right

// const arr = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8],
// ];

const arr1 = [1,2,3,4,5,6];

const result = arr1.reduceRight((acc, cur) => {
    // console.log(`Acc: ${acc}, Cur:${cur}`);
    return acc.concat(cur);
}, []);
// console.log(result); // [ 6, 5, 4, 3, 2, 1 ]

// Explain reduce right
const nums = [1,2,3,4];

const sum = nums.reduceRight((acc, cur) => {
    console.log(`Acc: ${acc}, Cur:${cur}`);
    return acc + cur;
}, 0);

// console.log(sum); // 10


