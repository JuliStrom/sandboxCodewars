//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    if (num > 0) {
       return Number("-" + num);
    //return `-${num}`;
    }
    return num;
}
console.log(makeNegative(42));
console.log(makeNegative(-3));
console.log(makeNegative(0));