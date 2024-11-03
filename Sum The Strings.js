//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a,b) {
    if (a === "" && b === "") {
    return "0";
    }
    return String(Number(a) + Number(b));
}
console.log(sumStr("4", "8"));
console.log(sumStr("0", "-5"));
console.log(sumStr("", ""));
console.log(sumStr("-4", "8"));


/*
function sumStr(a,b) {
    return String(+a+(+b))   
}
*/

/*
const sumStr = (i,j) => (+i) + (+j) + '';
*/

/*
function sumStr(a,b) {
    return (+a + +b).toString();
}
*/