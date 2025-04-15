/**
 * Promise chain
 */

function createPromise(id) {
  const rendTime = Math.floor(Math.random() * 200 + 100);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processing ${id} ${rendTime}`);
      resolve(id);
    }, rendTime);
  });
}

const ids = [1, 2, 3, 4, 5];
// ids.forEach((v) => {
//     createPromise(v)
// })


// promise chain resolved 

const result = ids.reduce((acc, cur) => {
    return acc.then(() => {
        return createPromise(cur);
    })

}, Promise.resolve());


result.then(() => {
    console.log('Done!');
})

