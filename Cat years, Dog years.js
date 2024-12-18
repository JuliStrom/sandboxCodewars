/* I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/
var humanYearsCatYearsDogYears = function(humanYears) {
let catYears;
let dogYears;
if(humanYears === 1) {
    catYears = 15;
    dogYears = 15;
} else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24; 
} else if (humanYears >= 3) {
    catYears = 24 + 4 * (humanYears - 2);
    dogYears = 24 + 5 * (humanYears - 2);
}
    return [humanYears,catYears,dogYears];
}

/* const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];*/
 
// var humanYearsCatYearsDogYears = x => x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x , 24 + ( 4 * (x-2)), 24 + (5 * (x-2))];

console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]
console.log(humanYearsCatYearsDogYears(12)); // [12,64,74]