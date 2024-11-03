//Complete the solution so that it reverses the string passed into it.
function solution(str){
    return str.split("").reverse().join("");
}
console.log(solution("Transformation"));
console.log(solution("Kyky"));


/* 
function solution(s){
    var newS = '';
    for (var i = s.length - 1; i >= 0; i--) {
    newS += s[i]; //newS = newS + s[i]
}
    return newS;
}
*/

/* Еще один способ решения
function solution(str){
// условие окончания рекурсии
if (str === "") 
return "";
else 
return solution(str.substr(1)) + str.charAt(0);
}
solution('Hello');
*/