
const studentArray = [
    {id:1,name:"HM Nayem",gpa:3.99,email:"nayem@gmail.com",dueAmount:10000},
    {id:2,name:"Shegufa Taranjum",gpa:2.87,email:"shegufa@gmail.com",dueAmount:0},
    {id:3,name:"Tamim",gpa:3.8,email:"tamim@gmail.com",dueAmount:12000},
    {id:4,name:"Asief Mahir",gpa:3.9,email:"mahir@gmail.com",dueAmount:0},
    {id:5,name:"Abir Azim",gpa:2.7,email:"abirazim@gmail.com",dueAmount:0}
];



// some implementation
function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true; // if one item passes the test
    }
  }
  return false; // none passed
}

const result = mySome(studentArray,(student) => student.dueAmount > 0);
// console.log(result); // true

