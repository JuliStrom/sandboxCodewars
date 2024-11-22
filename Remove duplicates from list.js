/* Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]*/
function distinct(a) {
    return [...new Set(a)];
}

/*function distinct(arr) {
let res = []; 
for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
    res.push(arr[i]);
    }
}
return res;
}*/

/*function distinct(a) {
  return Array.from(new Set(a));
}*/

console.log(distinct([1])); // [1]
console.log(distinct([1,2, 2, 3, 3, 3, 5])); // [ 1, 2, 3, 5 ]
console.log(distinct([1,1,2])); // [1,2]