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
    return rndInStr;
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors? **You must capitalize first letter**");
    if (userChoice == null) {
        console.log("You gave up!")
    } else if (userChoice == "") {
        console.log("You gave up!")
    }
    return userChoice.toLowerCase();
}

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     humanChoice = getHumanChoice();
//     computerChoice = getCompChoice(1,3);

// }

// const humanSelection = getHumanChoice();
// const computerSelection = getCompChoice();

// playRound(humanSelection, computerSelection);

// // let result = getHumanChoice();
// // console.log(result);