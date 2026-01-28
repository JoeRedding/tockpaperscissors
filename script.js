//pseudocode 
//randomly generate number between 1 and 3
//1 2 3 represent rock, paper or scissors
//get user input
//if statements to decide winner
//display result

function getRandomInteger(min,max) {
    return Math.floor(Math.random() * max - min +1) + min;
}

function getCompChoice() {
    let rndInt = getRandomInteger(1,3);
    let rndInStr = "";
    if (rndInt == 1) {
        rndInStr = "Rock";
    } else if (rndInt == 2) {
        rndInStr = "Paper"; 
    } else if (rndInt == 3) {
        rndInStr = "Scissors";
    }
    return rndInStr.toLowerCase();
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?");
    if (userChoice == null) {
        console.log("You gave up!")
    } else if (userChoice == "") {
        console.log("You gave up!")
    }
    return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let roundResult = "";
        if (humanChoice == computerChoice) {
            roundResult = "Draw!";
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            roundResult = "Computer Wins!";
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            roundResult = "Human Wins!";
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            roundResult = "Computer Wins!";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            roundResult = "Human Wins!";
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            roundResult = "Computer Wins!";
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            roundResult = "Human Wins!";
        } else {
            roundResult = "wtf";
        }
        return roundResult;
    }
    for ( let counter = 1; counter <= 5; counter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getCompChoice();

        let result = playRound(humanSelection, computerSelection);

        if(result == "Human Wins!") {
            humanScore++;
        } else if(result =="Computer Wins!") {
            computerScore++;
        } else {
        }
        
        console.log(result + "Computer: " + computerScore + ". Human: " + humanScore);
    }
}

playGame();