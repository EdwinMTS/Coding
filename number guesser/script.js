let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    let userDistanceToTarget = Math.abs(userGuess - targetNumber);
    let computerDistanceToTarget = Math.abs(computerGuess - targetNumber);

    return userDistanceToTarget <= computerDistanceToTarget;
}

function updateScore (winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++
    
