const team = [
  { id: 4, name: "Diana Davis", email: "diana.davis@example.com" },
  { id: 2, name: "Bob Brown", email: "bob.brown@example.com" },
  { id: 5, name: "Ethan Edwards", email: "ethan.edwards@example.com" },
  { id: 1, name: "Alice Anderson", email: "alice.anderson@example.com" },
  { id: 3, name: "Charlie Clark", email: "charlie.clark@example.com" },
];

const bubbleSort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // logic
      if (cb(array[j], array[j + 1]) > 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

// const myArray = [41, 34, 56, 87, 6, 3, 6, 8, 3, 7, 33, 12, 98, 32];
// assending order with our bubble sort 
// bubbleSort(myArray, (a, b) => a - b);
// console.log(myArray);

// sort array of object based on object id assending order
// bubbleSort(team, (a, b) => a.id > b.id);

// sort array of object based on object id dessending order
// bubbleSort(team, (a, b) => b.id > a.id);
// console.log(team);

// sort by name
bubbleSort(team, (a, b) => a.name > b.name);
// console.log(team);
