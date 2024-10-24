//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
numbers = [];
for (let i in numbers) {
    let sum = Math.sum(numbers[i] ** 2);
return sum;
}

};
console.log(squareSum(1, 2, 2));