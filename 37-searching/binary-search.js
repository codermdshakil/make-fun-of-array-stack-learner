// Binary seach

const numbers = [1, 22, 34, 2, 3, 44, 32, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }
  return -1;
};

numbers.sort((a, b) => a - b);

const index = binarySearch(numbers, 10);
console.log(index);



