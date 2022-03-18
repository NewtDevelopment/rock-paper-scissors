//friendly greeting
console.log("Welcome to the thunder dome!");


//Returns the computers choice of rock paper or scissors
function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    if (rand===0){
        return "rock"
    }else if(rand===1){
        return "paper"
    }else{
        return "scissors"
    }


}

//return the decision as to who won, lost or tied
function roundDecision(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return("You tie.")
        }else if(computerSelection==='paper'){
            return("You lose.")
        }else if(computerSelection==='scissors'){
            return("You win!")
        }
    }else if(playerSelection==='paper'){
        if(computerSelection === 'rock'){
            return("You win!")
        }else if(computerSelection==='paper'){
            return("You tie.")
        }else if(computerSelection==='scissors'){
            return("You lose.")
        }
    }else if(playerSelection==='scissors'){
        if(computerSelection === 'rock'){
            return("You lose.")
        }else if(computerSelection==='paper'){
            return("You win!")
        }else if(computerSelection==='scissors'){
            return("You tie.")
        }
    }else{
        return("Please input a valid selection!(rock, paper, or scissors)")
    }
}

//get the user input
function getUserInput(){
    let playerSelection = prompt("Make your choice wisely: ");
    return playerSelection.toLowerCase();
}

//loops through the game 5 times and displays the result at the end
function game(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i<5; i++){
        let outcome= roundDecision(getUserInput(), computerPlay())
        if(outcome === "You win!"){
            ++playerScore;
            console.log(outcome);
        }else if(outcome==="You lose."){
            ++computerScore;
            console.log(outcome);
        }else if(outcome==="You tie."){
            console.log(outcome);
        }else if(outcome==="Please input a valid selection!(rock, paper, or scissors)"){
            i--;
            console.log(outcome);
        }
        console.log('The current score is:')
        console.log(`Player: ${playerScore}  Computer: ${computerScore} `)
    }

    if(playerScore>computerScore){
        console.log(`You won with a final score of -> Player: ${playerScore}  Computer: ${computerScore}`)
    }else if(computerScore>playerScore){
        console.log(`You lost with a final score of -> Player: ${playerScore}  Computer: ${computerScore}`)
    }else{
        console.log(`There was a tie with a final score of -> Player: ${playerScore}  Computer: ${computerScore}`)
    }
    
}


//entry into the game
game();
