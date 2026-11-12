let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    
    switch (randNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// function draw(){
    
// }

function updateScore(winner){
    const scoreElement = document.getElementById(`${winner}-score`);
    scoreElement.innerText = (winner === "player") ? playerScore : computerScore;
}

function playerWins(){
    playerScore++;
    updateScore("player");
}

function computerWins(){
    computerScore++;
    updateScore("computer")
}

function playRound(playerChoice, computerChoice){
    console.log(`Player: ${playerChoice}    Computer: ${computerChoice}`)
    if(playerChoice === computerChoice){
        draw(playerChoice);
    }
    else if (playerChoice === "rock"){
        if(computerChoice === "scissors"){
            playerWins();
        }
        else{
            computerWins();
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            playerWins();
        }
        else{
            computerWins();
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "paper"){
            playerWins();
        }
        else{
            computerWins();
        }
    }
}


const rockBtn = document.getElementById("rock-btn");
rockBtn.addEventListener("click", ()=> {
    playRound("rock", getComputerChoice())
});

const paperBtn = document.getElementById("paper-btn");
paperBtn.addEventListener("click", ()=> {
    playRound("paper", getComputerChoice())
});

const scissorsBtn = document.getElementById("scissors-btn");
scissorsBtn.addEventListener("click", ()=> {
    playRound("scissors", getComputerChoice())
});