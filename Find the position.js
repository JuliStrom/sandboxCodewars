function position(letter){
    let lowLetter = letter.toLowerCase();
    let numberA = 96;
    // charCodeAt(0) выдает уникальный номер 
    let numberL = lowLetter.charCodeAt(0) - numberA;
    //console.log(letter.charCodeAt(0))
    return `Position of alphabet: ${numberL}`
    }

console.log(position("a"));
console.log(position("m"));
console.log(position("z"));