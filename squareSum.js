//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    let sum = 0;

for (let i = 1; i < numbers.length; i++) {
    sum += (numbers[i] * numbers[i]);
    return sum;
}
    
    console.log(sum);
}
