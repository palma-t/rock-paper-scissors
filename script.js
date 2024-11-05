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
};


let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let result = document.querySelector("#result");
let score = document.querySelector("#score");
score.style.cssText = "font-style: italic;";

function playGame() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanSelection = button.id;
            playRound()
            
            if(humanScore == 3){
                result.style.cssText = "color: green; font-weight: bold;";
                result.textContent = "You reached 3 points, YOU WIN!";
                humanScore = 0;
                computerScore = 0;
            } else if (computerScore == 3){
                result.style.cssText = "color: red; font-weight: bold;";
                result.textContent = "The computer got 3 points, YOU LOSE!";
                computerScore = 0;
                humanScore = 0;
            }
        });
    });

    function playRound() {
        let computerSelection = getComputerChoice();
        result.style.cssText = "color: black; font-weight: 400;";

        if (computerSelection === humanSelection) {
            result.textContent = "No one wins. Fair fight!";
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if (computerSelection === "rock" && humanSelection === "paper") {
            result.textContent = "Computer chose rock, you chose paper. You win, you rock-paper-scissors genius!";
            humanScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if (computerSelection === "scissors" && humanSelection === "rock") {
            result.textContent = "Computer chose scissors, you chose rock. You win, you rock-paper-scissors genius!";
            humanScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if(computerSelection === "paper" && humanSelection === "scissors") {
            result.textContent = "Computer chose paper, you chose scissors. You win, you rock-paper-scissors genius!";
            humanScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if(computerSelection === "paper" && humanSelection === "rock"){
            result.textContent = "Computer chose paper, you chose rock. You lose, get yourself together!";
            computerScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if(computerSelection === "rock" && humanSelection === "scissors"){
            result.textContent = "Computer chose rock, you chose scissors. You lose, get yourself together!";
            computerScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        } else if(computerSelection === "scissors" && humanSelection === "paper"){
            result.textContent = "Computer chose scissors, you chose paper. You lose, get yourself together!";
            computerScore++;
            score.textContent = "Score : Computer = " + computerScore +" / You = " + humanScore;
        }
    }

    /*for(let i = 0; i < 3; i++) {
        playRound();
    }*/


}

playGame()