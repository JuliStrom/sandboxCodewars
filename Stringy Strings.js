function stringy(size) {
    let arr =[];
    for(let i = 0; i < size; i++) {
    if(i % 2 === 0) {
        arr[i] = 1;
    } else 
        arr[i] =0
    
        } return arr.join('');
}
//const stringy = x => ''.padStart(x,'10');
console.log(stringy(6)); //
console.log(stringy(12)); //
console.log(stringy(1)); //
console.log(stringy(5)); //