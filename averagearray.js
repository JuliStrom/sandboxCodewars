function findAverage(array) {
    
    if (array.length == 0) {
    return 0;
    }
    let average = 0;
    for (let i = 0; i < array.length; i++) {
    average += array[i];
    //console.log(average);
    }
    return average/array.length;
}
console.log(findAverage([1, 5, 3]));
console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));