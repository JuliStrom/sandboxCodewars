/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
*/
function countSheeps(sheep) {
    if(!sheep || sheep.length === 0 ) {
    return 0;
    }
    
    let counter = 0;
    for(let i = 0; i < sheep.length; i++) {
    if(sheep[i] === true){
    counter ++;
    }
    }
    return counter;
}

/* another solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
  //Когда вы применяете filter(Boolean) к массиву, метод filter проходит по каждому элементу массива и передает его в функцию Boolean.

//Если результат вызова Boolean для элемента — true, этот элемент включается в новый массив.
  //filter(Boolean) создает новый массив, содержащий только "истинные" (truthy) значения из исходного массива.
  //метод length, чтобы получить количество элементов в этом новом массиве.
}
  */

console.log(countSheeps([])); //0
console.log(countSheeps([undefined,null,false,true])); //1
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined])); //2
console.log(countSheeps([null])); //0
