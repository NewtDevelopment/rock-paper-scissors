//friendly greeting
console.log("Welcome to the thunder dome!");
let player_score = document.querySelector('.playerScore')
let computer_score = document.querySelector('.computerScore')

//results
let round_result = document.querySelector('.round-result')
let final_result = document.querySelector('.final-result') 


//Returns the computers choice of rock paper or scissors
function getComputerPlay(){
    let rand = Math.floor(Math.random()*3);
    if (rand===0){
        return "rock"
    }else if(rand===1){
        return "paper"
    }else{
        return "scissors"
    }


}

function playerWin(){
    round_result.textContent="You win!";
    let current_score = parseInt(player_score.textContent);
    current_score++;
    player_score.textContent = current_score;
    if (current_score >=5){
        final_result.textContent = "You won!! Nice work!"
        round_result.textContent="";
        player_score.textContent = 0;
        computer_score.textContent = 0;
    }
}
function playerLose(){
    round_result.textContent="You lose.";
    let current_score = parseInt(computer_score.textContent);
    current_score++;
    computer_score.textContent = current_score;
    if (current_score >=5){
        final_result.textContent = "The computer won. Try again!!"
        round_result.textContent="";
        player_score.textContent = 0;
        computer_score.textContent = 0;
    }
}
function playerTie(){
    round_result.textContent="You tie.";
}

function resetGame(){
    player_score.textContent = 0;
    computer_score.textContent = 0;
    round_result.textContent = "";
}

//return the decision as to who won, lost or tied
function getRoundDecision(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            playerTie()
        }else if(computerSelection==='paper'){
            playerLose()
        }else if(computerSelection==='scissors'){
            playerWin();
        }
    }else if(playerSelection==='paper'){
        if(computerSelection === 'rock'){
            playerWin();
        }else if(computerSelection==='paper'){
            playerTie()
        }else if(computerSelection==='scissors'){
            playerLose()
        }
    }else if(playerSelection==='scissors'){
        if(computerSelection === 'rock'){
            playerLose()
        }else if(computerSelection==='paper'){
            playerWin();
        }else if(computerSelection==='scissors'){
            playerTie()
        }
    }else{
        return("Please input a valid selection!(rock, paper, or scissors)")
    }
}

//get the user input


//loops through the game 5 times and displays the result at the end
function playGame(){
    //button variables
    let btn_rock = document.querySelector('.btn-rock')
    let btn_paper = document.querySelector('.btn-paper')
    let btn_scissors = document.querySelector('.btn-scissors')

    


    btn_rock.addEventListener('click', () =>{
        getRoundDecision('rock', getComputerPlay())
    })
    btn_paper.addEventListener('click', () =>{
        getRoundDecision('paper', getComputerPlay())
    })
    btn_scissors.addEventListener('click', () =>{
        getRoundDecision('scissors', getComputerPlay())
    })
    
    

    let computerScore = 0;
    let playerScore = 0;

    
    
    

    
    
}


//entry into the game
playGame();
