/*"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]*/
function addLength(str) {
    let arr = str.split(' ');
    let arrWithLength = [];
    for(let i = 0; i < arr.length; i++) {
        arrWithLength.push(arr[i] + ' ' + arr[i].length);
    }
    
    return arrWithLength;
    }
    /*function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}*/


console.log(addLength("You need to return an array. Did you log to the console instead?"));
console.log(addLength("apple ban")); // ["apple 5", "ban 3"]);
console.log(addLength('you will win')); //["you 3", "will 4", "win 3"])
    