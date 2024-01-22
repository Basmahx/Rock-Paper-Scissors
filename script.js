let finalResult; // Declaring a variable outside a function makes it global, allowing reuse across function calls.
let computerMove = '';

function pickComputerMove() {

    const randomNumber = Math.random();
    

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }    

    console.log(computerMove);
};

function playGameRock() {
  
    pickComputerMove();

    let result = '';
    if (computerMove === 'rock'){
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result ='You lose.';
    } else if (computerMove === 'scissors') {
        result = 'You win.';
    }

    if (!finalResult) { // Check if 'finalResult' exists; if not, create a new 'h2' element and append it to the body.
        finalResult = document.createElement("h3");
        document.body.appendChild(finalResult);
    }
    
    finalResult.innerHTML = `You picked rock. Computer picked ${computerMove}. ${result}`;

};



function playGamePaper() {
    pickComputerMove();
    
    let result = '';
    if (computerMove === 'rock'){
        result = 'You win.';
    } else if (computerMove === 'paper') {
        result ='Tie.';
    } else if (computerMove === 'scissors') {
        result = 'You lose.';
    }


    if (!finalResult) { // Check if 'finalResult' exists; if not, create a new 'h2' element and append it to the body.
        finalResult = document.createElement("h3");
        document.body.appendChild(finalResult);
    }
    
    finalResult.innerHTML = `You picked paper. Computer picked ${computerMove}. ${result}`;

};



function playGameScissors() {
    pickComputerMove();
    
    let result = '';
    if (computerMove === 'rock'){
        result = 'You lose.';
    } else if (computerMove === 'paper') {
        result ='You win.';
    } else if (computerMove === 'scissors') {
        result = 'Tie.';
    }

    if (!finalResult) { // Check if 'finalResult' exists; if not, create a new 'h2' element and append it to the body.
        finalResult = document.createElement("h3");
        document.body.appendChild(finalResult);
    }
    
    finalResult.innerHTML = `You picked scissors. Computer picked ${computerMove}. ${result}`;

};

function resetFinalResult() {
    finalResult = null;
};