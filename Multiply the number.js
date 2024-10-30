function multiply(number){
//переводим чмсло в строку
let numberToString = number.toString();
// определяем сколько в числе цифр, это и будет степень
let exp = numberToString.length;
    if (number < 0) {
        return number*Math.pow(5, (numberToString.length - 1));
    }
    
    // число умножаем на пять в степени количества цифр в числе
    return number*Math.pow(5, exp);
}
console.log(multiply(10))
console.log(multiply(125))
console.log(multiply(3))
console.log(multiply(-3))