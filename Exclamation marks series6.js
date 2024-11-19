/*Remove n exclamation marks in the sentence from left to right. n is positive integer.
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"*/
function remove(s,n){
    let sArray = s.split('')
    let countExplamation = 0;
    
    for(let i = 0; i < sArray.length; i++) {
     if(sArray[i] === "!" && countExplamation < n){
        sArray[i] = '';
        countExplamation++

     }
    }
    return sArray.join('');
    }
/*function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;



  function remove(s, n) {
  return s.replace(/!/g, () => n-- > 0 ? "" : "!");
}
}*/


console.log(remove("Hi!",1)); // "Hi"
console.log(remove("Hi!",100)); // "Hi"
console.log(remove("Hi!!!",1)); // "Hi!!"
console.log(remove("Hi!!!",100)); // "Hi"
console.log(remove("!Hi",1)); // "Hi"
console.log(remove("!Hi!",1)); // "Hi!"
console.log(remove("!Hi!",100)); // "Hi"
console.log(remove("!!!Hi !!hi!!! !hi",1)); // "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",3)); // "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",5)); // "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",100)); // "Hi hi hi"