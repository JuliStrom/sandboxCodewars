/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6*/

function sumArray(array) {
    
    if (!array || array.length < 3) {
        return 0;
    } 
    let min = Math.min(...array);
    let max = Math.max(...array);
    let minRemoved = false;
    let maxRemoved = false;
     
    return array.reduce((sum, num) => {
        if ((num === min && !minRemoved) || (num === max && !maxRemoved)) {
                if (num === min) minRemoved = true;
                if (num === max) maxRemoved = true;
                return sum;
        }
        return sum + num;
    }, 0)
    }
    /*function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}*/
console.log(sumArray([1, 2, 3, 4, 5])); // 9 
console.log(sumArray([1, 1, 2, 3, 4, 5, 5])); //  9 
console.log(sumArray([1, 2])); //0

console.log(sumArray(null)); //                     0 
console.log(sumArray([ ])); //                      0 
console.log(sumArray([ 3 ])); //                    0 
console.log(sumArray([ 3, 5 ])); //                 0 
console.log(sumArray([ 6, 2, 1, 8, 10 ])); //       16 
console.log(sumArray([ 0, 1, 6, 10, 10 ])); //      17 
console.log(sumArray([ -6, -20, -1, -10, -12 ])); //-28 
console.log(sumArray([ -6, 20, -1, 10, -12 ])); //  3 