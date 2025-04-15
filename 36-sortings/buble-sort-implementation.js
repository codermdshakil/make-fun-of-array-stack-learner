
// Implement buble sort

const myArray = [41,34,56,87,6,3,6,8,3,7,33,12,98,32];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length -1; i++) {
        
        for (let j = 0; j < array.length -1; j++) {
            if(array[j] > array[j+1] ){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort(myArray);
console.log(myArray);



