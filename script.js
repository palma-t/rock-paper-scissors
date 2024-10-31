function getComputerChoice() {
    let computerChoice = ""
    console.log(computerChoice)
    let randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber < 3) {
        computerChoice = "rock";
    } else if (randomNumber >= 3 && randomNumber <= 6) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanAnswer = prompt("Choose your weapon: rock, paper or scissors?")
    let humanChoice = humanAnswer.toLowerCase();
    if (humanChoice === "rock" || 
        humanChoice === "paper" || 
        humanChoice === "scissors") {
        return humanChoice
    } else {
        alert("Your answer is weird. Try again!")
        return getHumanChoice()
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice()
        if (computerSelection === humanSelection) {
            console.log("No one wins. Fair fight!");
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore);
        } else if (computerSelection === "rock" && humanSelection === "paper") {
            console.log("Computer chose rock, you chose paper. You win, you rock-paper-scissors genius!");
            humanScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore)
        } else if (computerSelection === "scissors" && humanSelection === "rock") {
            console.log("Computer chose scissors, you chose rock. You win, you rock-paper-scissors genius!");
            humanScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore)
        } else if(computerSelection === "paper" && humanSelection === "scissors") {
            console.log("Computer chose paper, you chose scissors. You win, you rock-paper-scissors genius!");
            humanScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore)
        } else if(computerSelection === "paper" && humanSelection === "rock"){
            console.log("Computer chose paper, you chose rock. You lose, get yourself together!");
            computerScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore)
        } else if(computerSelection === "rock" && humanSelection === "scissors"){
            console.log("Computer chose rock, you chose scissors. You lose, get yourself together!");
            computerScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore)
        } else if(computerSelection === "scissors" && humanSelection === "paper"){
            console.log("Computer chose scissors, you chose paper. You lose, get yourself together!");
            computerScore++;
            console.log("Score : Computer = " + computerScore +" / You = " + humanScore);
        }
    }

    for(let i = 0; i < 3; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("You WIN!");
    } else if (computerScore > humanScore) {
        console.log("You LOSE!");
    } else {
        console.log("Well, fair fight. You're all the same to me.");
    }
}

playGame()
