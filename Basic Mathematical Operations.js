/*
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
function basicOp(operation, value1, value2){
    let mathOperation = eval(value1  + operation +  value2); 
        return mathOperation;
}
/*
function basicOp(operation, value1, value2) {
var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
};
return cases[operation]
}
  */
console.log(basicOp("+", 4, 7));// 11
console.log(basicOp("-", 15, 18));// -3
console.log(basicOp("*", 5, 5));// 25
console.log(basicOp("/", 49, 7)); // 7