function squareOrSquareRoot(array) {
    for(let i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i])) === true) {
    array[i] = Math.sqrt(array[i]);
    } else
        array[i] = array[i] ** 2;
    
    }

    return array;  
}
/* 
function squareOrSquareRoot(array) {
return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
});  
}
*/
console.log(squareOrSquareRoot([2, 100, 9, 5, 121, 4, 9, 46]));