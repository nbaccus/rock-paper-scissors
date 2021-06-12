function computerPlay() {
    let rnd = Math.floor(Math.random() * 3 - 1 ) + 1;
    if (rnd == 2) {
        return "rock";
    }
    else if (rnd == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log(`It's a tie! ${playerSelection} ties with ${computerSelection}.`);
        return 0;
    }
    else if (
        playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "rock" & computerSelection == "scissors"
    || playerSelection == "paper" & computerSelection == "rock" 
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }
    else {
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
        return -1;
    }
    
   
}


function game() {
    // var roundNumber = prompt("how many rounds (up to 5) would you like to play?");
    let roundNumber = 3;
    var playerWin =0;
    var playerTies=0;
    var playerLoss=0;
    for (i =1; i <= roundNumber; i++) {
        var playerSelection = prompt("Choose a move", "Rock, paper or scissors")
        if (playerSelection == null || playerSelection == "") {
            return null;
        }
        var computerSelection = computerPlay();
        var result = (playRound(playerSelection, computerSelection));
        if (result ==1) { 
            playerWin += 1;
        }
        if (result==-1) {
            playerLoss +=1;
        }
        else {
            playerTies +=1;
        }
    }
    if (playerWin > playerLoss) {
        console.log(`You are the winner! You have won ${playerWin} time(s).`);
    }
    else if (playerWin == playerLoss) {
        console.log(`It's a tie!`);
    }
    else {
        console.log(`You've lost...You have lost ${playerLoss} time(s).`);
    }
}

game();