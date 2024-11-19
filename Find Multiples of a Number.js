function findMultiples(integer, limit) {
    let arr = [integer];
    for(let i = 1; i < Math.floor(limit/integer); i++) {
    arr[i] = arr[i-1] + integer;
    }
    return arr;
}
  /*function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}*/

/*function findMultiples(int,limit){
  let multiples = [];
  for(let i = int; i <= limit; i += int){ multiples.push(i); }
  return multiples;
}*/

console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2)); // [1, 2]
console.log(findMultiples(5, 7)); // [5]
console.log(findMultiples(4, 27)); // [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54)); // [11, 22, 33, 44]