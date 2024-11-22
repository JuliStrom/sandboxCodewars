/*You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters 
should start at 9.45 meters on the runway. 
(2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.
You will receive a vaulter's height in meters (which will always lie in a range
between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, 
rounded to two decimal places.*/
/*function startingMark(bodyHeight){
    let jumper1 = {height: 1.5, startingMark: 9.45};
    let jumper2 = {height: 1.83, startingMark: 10.67}
    const slopeFactor = 3.9355; //(jumper2.startingMark - jumper1.startingMark) / (jumper2.height - jumper1.height);
  const bConstant = 3.468; //jumper1.startingMark - slopeFactor * jumper1.height ;
    const startingMark = slopeFactor * bodyHeight + bConstant;
    
    //console.log((jumper2.startingMark - jumper1.startingMark)/(jumper2.height - jumper1.height));
    //console.log(jumper1.startingMark - slopeFactor * jumper1.height);
    //console.log(startingMark);
    return Math.round(startingMark * 100) / 100;
}*/
function startingMark(bodyHeight) {
    var a = {x: 1.52, y: 9.45},
        b = {x: 1.83, y: 10.67},
        m = (b.y - a.y) / (b.x - a.x);
    return Math.round((m * bodyHeight + b.y - m * b.x) * 100) / 100;
}
    
   
    
console.log(startingMark(1.52)); // 9.45);
console.log(startingMark(1.75)); // 10,36
console.log(startingMark(1.83)); // 10.67);
console.log(startingMark(1.44)); // 9.14)
console.log(startingMark(1.22)); // 8.27);

console.log(startingMark(2.13)); // 11.85);
