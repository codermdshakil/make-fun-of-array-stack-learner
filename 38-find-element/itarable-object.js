// Method	        Returns	    Example Output
// keys()    ->     Indexes     (0, 1, 2, ...)	0, 1, 2
// values()  -> 	Values      ("apple", "banana")	"apple", "banana"
// entries() ->	    Index + Value pairs

const fruits = ["apple", "banana", "cherry"];

// keys - properties or index
const keys = fruits.keys();

for (let key of keys) {
  console.log(key);
}

// output
// 0
// 1
// 2


// values -> values
const values = fruits.values();

for (let value of values) {
  console.log(value);
}


// Entries -> key - value pair 
const entries = fruits.entries();

for (let [index, value] of entries) {
  console.log(index, value);
}