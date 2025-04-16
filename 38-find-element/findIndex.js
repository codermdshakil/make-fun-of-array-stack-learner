

const arr = [1,3,76,34,22,46,78,23,87];

// find index of array o numbers element 
const findedIndex = arr.findIndex((item) => item === 76); // index 2
// console.log(findedIndex);

// find index of array of object
const todos = [
    {name:'Project - 1', isDone:true},
    {name:'Project - 2', isDone:true},
    {name:'Project - 3', isDone:true},
    {name:'Project - 4', isDone:false},
    {name:'Project - 5', isDone:false},
    {name:'Project - 6', isDone:false},
    {name:'Project - 7', isDone:false},
];

// get array of object index 
const index = todos.findIndex((item) => item.name === 'Project - 4'); // index - 3



