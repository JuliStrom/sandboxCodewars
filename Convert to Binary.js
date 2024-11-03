/*Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b
is the same as the decimal representation of d.
 */
let n = 11;
function toBinary(n){
    let binaryN = n.toString(2);
   
    let decimalN = parseInt(binaryN, 10);
    
    return decimalN;
    
}
     


// toBinary = (n) => parseInt(n.toString(2));

/*
function toBinary(n){
let arr = []
    for (let i = n; i >= 1; i = Math.floor(i / 2)) {
    console.log(Math.floor(i / 2));
        console.log(arr.push(i % 2 === 0 ? 0 : 1))
    }
return Number(arr.reverse().join(''))
}*/
console.log(toBinary(3)); //11
console.log(toBinary(11)); //1011
console.log(toBinary(1)); //1
//console.log(toBinary(2)); // 10
//console.log(toBinary(3)); //11
//console.log(toBinary(5));//101 