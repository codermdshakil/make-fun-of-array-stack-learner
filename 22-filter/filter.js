const numbers = [1, 2, 3, 4, 5, 6, 7];
// const filteredNums = numbers.filter(item => item >= 4); // [ 4, 5, 6, 7 ]
// const filteredNums = numbers.filter(item => item != 5); // [ 1, 2, 3, 4, 6, 7 ]
// console.log(filteredNums);

const studentArray = [
  {
    id: 1,
    name: "HM Nayem",
    gpa: 3.99,
    email: "nayem@gmail.com",
    dueAmount:10000,
  },
  {
    id: 2,
    name: "Shegufa Taranjum",
    gpa: 3.87,
    email: "shegufa@gmail.com",
    dueAmount:0,
  },
  {
    id: 3,
    name: "Tamim",
    gpa: 3.8,
    email: "tamim@gmail.com",
    dueAmount:12000,
  },
  {
    id: 4,
    name: "Asief Mahir",
    gpa: 3.9,
    email: "mahir@gmail.com",
    dueAmount:0,
  },
  {
    id: 5,
    name: "Abir Azim",
    gpa: 2.7,
    email: "abirazim@gmail.com",
    dueAmount:0,
  },
];

// const filterStudents = studentArray.filter((student) => student.dueAmount > 0);
// console.log(filterStudents);

const gpaUnderThree = studentArray.filter((student) => student.gpa < 3);
// console.log(gpaUnderThree);
// console.log(` You GPA - ${gpaUnderThree[0].gpa} Study more for better next time.`);



