/*Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/
function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    
    let arrSort = arr.sort((a, b) => a-b);
    
    
    return [...new Set(arrSort)];
    
}

/* function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}*/ 
console.log(mergeArrays([1,2,3,4], [5,6,7,8])); // [1,2,3,4,5,6,7,8], 
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])); // [1,2,3,4,5,6,7,8,9,10], 
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])); // [1,2,3,4,5,7,9,10,11,12]