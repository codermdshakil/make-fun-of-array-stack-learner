
const Queue = require('../18-queue-using-js/queue-concepts');

console.time('Queue: ');
const queue = new Queue();
queue.enqueue('Task One')
queue.enqueue('Task Two')
queue.enqueue('Task Three');

queue.showQueue();
queue.dequeue()
queue.dequeue()
queue.showQueue();
console.log(queue.next());
console.timeEnd('Queue: ');

// Using javaScript use concpets of Queue using push, shift;
console.time('Array : ');
const q = [];
q.push('Item one')
q.push('Item two')
q.push('Item three')
console.log(q);
q.shift();
console.log(q);
q.shift();
console.log(q);
console.timeEnd('Array : ');


// Time Complexity here is also win Array
// Queue: : 18.68ms
// Array : : 5.408ms

