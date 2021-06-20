
var roundNum=0;
count = localStorage.getItem('count');
wins=0;
losses=0;
flag=0;
if (count== null) {
	count=0;
}

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


function playRound() {

	count += 1;
	var computerSelection = computerPlay();
	var playerSelection = this.value;
    	playerSelection = playerSelection.toLowerCase();
	const display = document.querySelector('#display');
	const para1 = document.createElement('p');

    if (playerSelection == computerSelection) {
	para1.textContent= `ROUND ${count}: It's a tie! You played ${playerSelection} and Computer played ${computerSelection}.`;
	display.appendChild(para1);
    }
    else if (
        playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "rock" & computerSelection == "scissors"
    || playerSelection == "paper" & computerSelection == "rock" 
    ) {
	para1.textContent= `ROUND ${count}: You win! You played ${playerSelection} and Computer played ${computerSelection}.`;
	display.appendChild(para1);
	wins+=1;       
    }
    else {
	para1.textContent= `ROUND ${count}: You lose... You played ${playerSelection} and Computer played ${computerSelection}.`;
	display.appendChild(para1);
	losses+=1;
    }


	if (count == roundNum) {
		flag=1;
		disableButtons();
		const para2 = document.createElement('p');
		if (losses>wins) {
			para2.textContent = `Computer is the winner! Your wins: ${wins}. Your losses: ${losses}`;
			}
		else if (wins>losses) {
			para2.textContent = `You are the winner! Your wins: ${wins}. Your losses: ${losses}`;
			}
		else {
			para2.textContent = `It's a tie. Your wins: ${wins}. Your losses: ${losses}`;
		}
		display.appendChild(para2);
	} 
}




function game() {
    let roundNumber = 1;
    var playerWin =0;
    var playerTies=0;
    var playerLoss=0;
    for (i =1; i <= roundNumber; i++) {
 
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
let buttons = document.querySelectorAll('button');
buttons.forEach (button => {
	if (button.id != "roundsbtn" && button.id!="restart" ) {
		button.disabled=true;	
	}
});

const rndbtn = document.querySelector('#roundsbtn');
rndbtn.addEventListener('click', () => {
	var dropdown = document.getElementById('roundsslct');
	roundNum = dropdown.value;
	rndbtn.disabled=true;
	
	buttons.forEach (button => {
	
	if (button.id != "roundsbtn"  ) {
		button.disabled = false;
		button.addEventListener('click', playRound);	
	}
});
});

/*
let buttons = document.querySelectorAll('button');
buttons.forEach (button => {
	if (button.id != "roundsbtn" ) {
		button.addEventListener('click', playRound);	
	}
});
*/

function disableButtons() {
let buttons = document.querySelectorAll('button');
buttons.forEach (button => {
	if ( button.id!="restart"){	
		button.disabled=true;
		}
	});
}