// How to work with sort method

// const numbers = [10,20,30,40,50,60,70,80,90,100];

// just sort method will not work perpectly
// numbers.sort();
// console.log(numbers);

const numbers = [12, 48, 3, 30, 19, 25, 7, 44, 1, 27, 38, 52, 16, 5, 33];

// assending order
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// dessending order
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// String array sort

// Assending order Aa -> Az
const strings = ["apple", "Cat", "Ball", "Apple"];
strings.sort((a, b) => {
  // best practice
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});

// Dessending order Az -> Zz
const strings2 = ["apple", "Cat", "Ball", "Apple"];
strings.sort((a, b) => {
  // best practice
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) return 1;
  if (b < a) return -1;
  return 0;
});

// console.log(strings);  // [ 'Cat', 'Ball', 'apple', 'Apple' ]

// Sort by id

const team = [
  { id: 4, name: "Diana Davis", email: "diana.davis@example.com" },
  { id: 2, name: "Bob Brown", email: "bob.brown@example.com" },
  { id: 5, name: "Ethan Edwards", email: "ethan.edwards@example.com" },
  { id: 1, name: "Alice Anderson", email: "alice.anderson@example.com" },
  { id: 3, name: "Charlie Clark", email: "charlie.clark@example.com" },
];

// sort object by id assending order
// team.sort((a, b) => {
//     if(a.id > b.id) return 1;
//     if(b.id > a.id) return -1;
//     return 0;
// });


// sort object by id dessending order
// team.sort((a, b) => {
//     if(a.id < b.id) return 1;
//     if(b.id < a.id) return -1;
//     return 0;
// });

// console.log(team);
