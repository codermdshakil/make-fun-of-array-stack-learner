
// update existing element in array


// easy one
const numbers = [1,2,7,4, 5];
numbers[2] = 3;
// console.log(numbers);

// array of objects
const students = [
    {id:1, name:'Shakil'},
    {id:2, name:'Noyon'},
    {id:3, name:'Nadim'},
    {id:4, name:'Mafuj'},
];

const updatedId = 3;
const updatedName = 'Asraf Ali';

students.forEach(student => {
    if(student.id === updatedId){
       student.name = updatedName;
    }
});

console.log(students);








