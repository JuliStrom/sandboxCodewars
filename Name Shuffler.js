//Example(Input --> Output)  "john McClane" --> "McClane john"
function nameShuffler(str){
    let arrName = str.split(' ');
    return arrName.reverse().join(' ');
}

console.log(nameShuffler('john McClane')); 'McClane john'
console.log(nameShuffler('Mary jeggins')); 'jeggins Mary'
console.log(nameShuffler('tom jerry')); 'jerry tom'