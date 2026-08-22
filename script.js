let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);
    
    switch (randNum){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(){
    let userChoice = prompt("Enter your choice:\n1 or r for Rock\n2 or p for Paper\n3 or s for Scissors");

    if (userChoice === null){
        return "Rock";
    }

    userChoice = userChoice.trim().toLowerCase();

    switch (userChoice){
        case "1":
        case "r":
        case "rock":
            return "Rock";
        case "2":    
        case "p":
        case "paper":
            return "Paper";
        case "3":            
        case "s":
        case "scissors":
            return "Scissors";
        default:
            alert("Invalid Input! Enter again");
            return getPlayerChoice();     
    }
}

function draw(playerChoice){
    console.log(`You both chose ${playerChoice}`);
    console.log("DRAW!");
}

function playerWins(playerChoice, computerChoice){
    console.log(`${playerChoice} Beats ${computerChoice}`);
    console.log("PLAYER WINS!");
    playerScore++;
}

function computerWins(playerChoice, computerChoice){
    console.log(`${computerChoice} Beats ${playerChoice}`);
    console.log("COMPUTER WINS!");
    computerScore++;
}

function playRound(playerChoice, computerChoice){
    console.log(`Player: ${playerChoice}    Computer: ${computerChoice}`)
    if(playerChoice === computerChoice){
        draw(playerChoice);
    }
    else if (playerChoice === "Rock"){
        if(computerChoice === "Scissors"){
            playerWins(playerChoice, computerChoice);
        }
        else{
            computerWins(playerChoice, computerChoice);
        }
    }
    else if(playerChoice === "Paper"){
        if(computerChoice === "Rock"){
            playerWins(playerChoice, computerChoice);
        }
        else{
            computerWins(playerChoice, computerChoice);
        }
    }
    else if(playerChoice === "Scissors"){
        if(computerChoice === "Paper"){
            playerWins(playerChoice, computerChoice);
        }
        else{
            computerWins(playerChoice, computerChoice);
        }
    }

    console.log(`Player: ${playerScore}    Computer: ${computerScore}`)
}

function playGame(){
    playerScore = 0;
    computerScore = 0;
    for(let i = 1; i <= 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if(playerScore === computerScore){
        console.log("GAME DRAW!!!");
    }
    else if(playerScore > computerScore){
        console.log("PLAYER WINS THE GAME!!!");
    }
    else{
        console.log("COMPUTER WINS THE GAME!!!");
    }
}

playGame();