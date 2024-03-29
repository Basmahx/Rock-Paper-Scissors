let finalResult; // Declaring a variable outside a function makes it global, allowing reuse across function calls.

const score = {

    wins: 0,
    losses: 0,
    ties: 0
};

function pickComputerMove() {

    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }    

    return computerMove;
};

function playGame(playerMove) {
  
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') { 
        if (computerMove === 'rock'){
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result ='You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock'){
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result ='Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock'){
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result ='You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }


    if (!finalResult) { // Check if 'finalResult' exists; if not, create a new 'h2' element and append it to the body.
        finalResult = document.createElement("h3");
        document.body.appendChild(finalResult);
    }

    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.losses++;
    } else if (result === 'Tie.' ) {
        score.ties++;
    }
    
    finalResult.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}<br>
    Wins: ${score.wins}<br> Losses: ${score.losses}<br> Ties: ${score.ties}`;
 
};

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    if (finalResult) {
        finalResult.innerHTML = '';
 
    }
}


function resetFinalResult() {
    finalResult = null;
};