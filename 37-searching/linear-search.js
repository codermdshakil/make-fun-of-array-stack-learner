// Understand And Implement Linear Seach

const arr = [1,3,78,39,22,34,2,11,30,567,19,90];

const team = [
  { id: 4, name: "Diana Davis", email: "diana.davis@example.com" },
  { id: 2, name: "Bob Brown", email: "bob.brown@example.com" },
  { id: 5, name: "Ethan Edwards", email: "ethan.edwards@example.com" },
  { id: 1, name: "Alice Anderson", email: "alice.anderson@example.com" },
  { id: 3, name: "Charlie Clark", email: "charlie.clark@example.com" },
];
 
const linearSearch = (arr, key) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === key){
      return i; // return index
    }
  }
  return -1;
}

// const s1 = linearSearch(arr,3);
// console.log(s1);
