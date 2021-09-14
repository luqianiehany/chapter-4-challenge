// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const result = document.getElementById('result');

// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               result.innerHTML = "DRAW ";
               result.style.backgroundColor = '#035B0C';
               result.style.padding = '20px';
           } 
          // if it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               result.innerHTML = "PLAYER 1<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               result.innerHTML = "COM<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               result.innerHTML = "COM<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               result.innerHTML = "PLAYER 1<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               result.innerHTML = "COM<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               result.innerHTML = "PLAYER 1<br>WIN  ";
               result.style.backgroundColor = '#4C9654';
               result.style.padding = '20px';
           }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.