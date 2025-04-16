const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Isla", email: "isla@example.com", age: 27 },
  { id: 4, name: "Jack", email: "jack@example.com", age: 31 },
  { id: 5, name: "Charlie", email: "charlie@example.com", age: 22 },
  { id: 6, name: "David", email: "david@example.com", age: 28 },
];

// find item give me full object 
const findexItem = users.find((user) => user.id === 4);
// console.log(findexItem);



