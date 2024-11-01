const rps = (p1, p2) => {
    let getMsg;
    if ((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")) {
    getMsg = "Player 1 won!";
    } else if (p1 === p2) {
        getMsg = "Draw!";
    } else {
    getMsg = "Player 2 won!";
    }
    return getMsg;
};
console.log(rps("paper", "paper"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "scissors"));



// другое решение, которое понравилось
/*const rps = (p1, p2) => {
    var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
    };
    
    if (p1 == p2) {
    return 'Draw!';
    } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};*/
