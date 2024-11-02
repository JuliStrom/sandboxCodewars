function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin === true) {
        sharkSpeed = sharkSpeed/2;
    }
    let timeShark = sharkDistance/sharkSpeed;
    let timeYou = pontoonDistance/youSpeed;
    return timeYou < timeShark ? "Alive!" : "Shark Bait!";
}
console.log(shark(12, 50, 4, 8, true)); //Alive
console.log(shark(7, 55, 4, 16, true)); //Alive
console.log(shark(24, 0, 4, 8, true)); // Shark Bait
console.log(shark(22, 82, 2, 12, true)); //Alive