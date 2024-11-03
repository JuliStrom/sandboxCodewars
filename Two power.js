function powersOfTwo(n){
    let arrStart = [];
    for(let i = 0; i <= n; i++) {
    arrStart.push(Math.pow(2, i));
    }
    return arrStart;
}
console.log(powersOfTwo(5)); // [1, 2, 4, 8, 16, 32]
console.log(powersOfTwo(0));//[1]
console.log(powersOfTwo(10)); // [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]


/*
// map method
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )
*/