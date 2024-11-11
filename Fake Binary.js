/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
 Return the resulting string.
Note: input will never be an empty string. */
function fakeBin(x){
    let longNumber = x.split("");
    //console.log(longNumber);
    for(let i = 0; i < longNumber.length; i++) {
        if (longNumber[i] < '5') {
            longNumber[i] = '0';
        } else {
        longNumber[i] = '1';
    }
}
    return longNumber.join('');
}
/*
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}*/
    console.log(fakeBin('57935652323345'));
    console.log(fakeBin('666555222'));
    console.log(fakeBin('11111444999999'));
    console.log(fakeBin('888666231000000'));