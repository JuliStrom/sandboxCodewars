function removeEveryOther(arr){

arrNew = arr.filter((_, index) => index % 2 == 0);

return arrNew;
}
/*function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}*/


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); //['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9]
console.log(removeEveryOther([[1, 2]])); // [[1, 2]]