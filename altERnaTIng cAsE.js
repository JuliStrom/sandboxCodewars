/*Define String.prototype.toAlternatingCase
 (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
 see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.*/
String.prototype.toAlternatingCase = function () {
    let strNew = this.split('');
    for(let i = 0; i < strNew.length; i++) {
    if (strNew[i] === strNew[i].toUpperCase()) {
        strNew[i] = strNew[i].toLowerCase();
    } else
        strNew[i] = strNew[i].toUpperCase();
    }
return strNew.join('');
}

console.log("hello world".toAlternatingCase()); // "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // "hello world"
console.log("hello WORLD".toAlternatingCase()); // "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // "hEllO wOrld"
console.log("12345".toAlternatingCase()); // "12345"
console.log("1a2b3c4d5e".toAlternatingCase()); // "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
console.log("Hello World".toAlternatingCase().toAlternatingCase()); // "Hello World"


