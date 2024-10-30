var countSheep = function (num){
    // надо перевести все отрицательные числа в положительные
    let plusNum  = Math.abs(num);
    let numbers = "";
    for (let i = 1; i <= plusNum; i++) {
        numbers += `${i} sheep... `;
    }
    console.log(numbers);
    return numbers;
}
console.log(countSheep(5));
console.log(countSheep(2));
console.log(countSheep(-10));