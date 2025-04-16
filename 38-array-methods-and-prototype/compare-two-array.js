
// Compare two array
const arr1 = [1,2,3,4,5],arr2 = [1,2,3,4,5];

// arr1 === arr2 // false why because reference are different

// Compare two array equal or not
// if(JSON.stringify(arr1) === JSON.stringify(arr2)){
//     console.log('Equal');
// }
// else{
//     console.log('Not Equal');
// }


// Another ways

const compare = (arr1, arr2) => {

    // when length are not same return false
    if(arr1.length != arr2.length){
        return false;
    }      
    // when elements are not same return false
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) return false;
    }

    // if above two condition are not value then return true
    return true;
};


// console.log(compare(arr1, arr2)); // true


