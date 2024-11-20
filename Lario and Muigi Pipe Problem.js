/*Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */
function pipeFix(numbers){
    let fullNumbers = [];
    for(let i = numbers[0]; i <= numbers.at(-1); i++) {
        fullNumbers.push(i);
    } return fullNumbers;
    }
//let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

console.log(pipeFix([1,2,3,5,6,8,9])); //[1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1,2,3,12])); //[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6,9])); //[6,7,8,9]
console.log(pipeFix([-1,4])); //[-1,0,1,2,3,4]
console.log(pipeFix([1,2,3])); //[1,2,3]