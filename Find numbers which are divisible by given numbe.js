/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]*/
function divisibleBy(numbers, divisor){
    let arrDivisible = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % divisor === 0) {
        arrDivisible.push(numbers[i]);
        } 

    }
return arrDivisible;
}
/*function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}*/

console.log(divisibleBy([1,2,3,4,5,6], 2)); // [2,4,6]
console.log(divisibleBy([1,2,3,4,5,6], 3)); // [3,6]
console.log(divisibleBy([0,1,2,3,4,5,6], 4)); // [0,4]
console.log(divisibleBy([0], 4)); // [0]
console.log(divisibleBy([1,3,5], 2)); // []