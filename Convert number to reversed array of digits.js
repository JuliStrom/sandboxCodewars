/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/
function digitize(n) {

    let str = n.toString();
    console.log(str);
    let arr = str.split('');
    arr = arr.reverse();
    return arr.map(Number);
   
}
/*function digitize(n) {
  return String(n).split('').map(Number).reverse()
}*/

console.log(digitize(35231)); //[1,3,2,5,3]
console.log(digitize(0)); //[0]
console.log(digitize(56665111));
console.log(digitize(96));