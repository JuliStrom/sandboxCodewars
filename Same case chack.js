/*Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1*/
function sameCase(a, b){
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1;
    } else if(a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1
    } else if(a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } 
    return 0;
}
console.log(sameCase('C', 'B')); // 1);
console.log(sameCase('b', 'a')); // 1);
console.log(sameCase('d', 'd')); // 1);
console.log(sameCase('A', 's')); // 0);
console.log(sameCase('c', 'B')); // 0);
console.log(sameCase('b', 'Z')); // 0);
console.log(sameCase('\t', 'Z')); // -1);
console.log(sameCase('H', ':')); // -1);