/*
Given an array of integers, return a new array with each value doubled.

For example:[1, 2, 3] --> [2, 4, 6]
*/
function maps(x){
    let arr = [];
    for(let i = 0; i < x.length; i++) {
      arr.push(x[i] * 2);
    }
return arr;
}

/*
function maps(x){
  return x.map(n => n * 2);
}
  */
console.log(maps([1, 2, 3])); //[2, 4, 6]
    console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
    console.log(maps([2, 2, 2, 2, 2, 2])); //[4, 4, 4, 4, 4, 4]