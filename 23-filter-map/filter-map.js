const studentArray = [
    {id:1,name:"HM Nayem",gpa:3.99,email:"nayem@gmail.com",dueAmount:10000},
    {id:2,name:"Shegufa Taranjum",gpa:2.87,email:"shegufa@gmail.com",dueAmount:0},
    {id:3,name:"Tamim",gpa:3.8,email:"tamim@gmail.com",dueAmount:12000},
    {id:4,name:"Asief Mahir",gpa:3.9,email:"mahir@gmail.com",dueAmount:0},
    {id:5,name:"Abir Azim",gpa:2.7,email:"abirazim@gmail.com",dueAmount:0}
];

// filter -> find the elements
// map -> which message should sent

const lowGPAStudents = studentArray.filter((student) => student.gpa < 3).map((value) => {
    return{
        ...value,
        Title:'Result Published',
        msg:'You Failed'
    }
});

console.log(lowGPAStudents);
 

