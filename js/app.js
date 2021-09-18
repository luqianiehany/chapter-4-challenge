let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection img');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const result = document.getElementById('result');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
			document.getElementById("vs").style.display = "none";
			document.getElementById("rock").style.pointerEvents = "none";
			document.getElementById("paper").style.pointerEvents = "none";
			document.getElementById("scissors").style.pointerEvents = "none";
			document.getElementById("rock").classList.remove("selected");
			document.getElementById("paper").classList.remove("selected");
			document.getElementById("scissors").classList.remove("selected");
			document.getElementById("comrock").classList.remove("selected");
			document.getElementById("compaper").classList.remove("selected");
			document.getElementById("comscissors").classList.remove("selected");

			let clickedBtn = e.target.className;
			e.target.classList.add("selected");

			let randomNum = Math.floor(Math.random() * randomClasses.length);
			let computerSelected = randomClasses[randomNum];
			if(randomNum == 0)
				document.getElementById("comrock").classList.add("selected");
			else if(randomNum == 1)
				document.getElementById("compaper").classList.add("selected");
			else
				document.getElementById("comscissors").classList.add("selected");

			if(clickedBtn === computerSelected)
			{
				pScore.innerHTML = pScore.innerHTML;
				cScore.innerHTML = cScore.innerHTML;
				result.innerHTML = "DRAW";
				result.classList.add("resultdraw");
				result.classList.remove("resultwin");
				result.classList.remove("resultlose");
			} 
			else if(clickedBtn === randomClasses[0] && computerSelected === randomClasses[2])
			{
				pScore.innerHTML = playerScore;
				playerScore++;
				result.innerHTML = "PLAYER 1<br>WIN";
				result.classList.add("resultwin");
				result.classList.remove("resultdraw");
				result.classList.remove("resultlose");
			}
			else if(clickedBtn === randomClasses[0] && computerSelected === randomClasses[1])
			{
				cScore.innerHTML = computerScore;
				computerScore++;
				result.innerHTML = "COM<br>WIN";
				result.classList.add("resultlose");
				result.classList.remove("resultdraw");
				result.classList.remove("resultwin");
			}
			else if(clickedBtn === randomClasses[1] && computerSelected === randomClasses[2])
			{
				cScore.innerHTML = computerScore;
				computerScore++;
				result.innerHTML = "COM<br>WIN";
				result.classList.add("resultlose");
				result.classList.remove("resultdraw");
				result.classList.remove("resultwin");
			}
			else if(clickedBtn === randomClasses[1] && computerSelected === randomClasses[0])
			{
				pScore.innerHTML = playerScore;
				playerScore++;
				result.innerHTML = "PLAYER 1<br>WIN";
				result.classList.add("resultwin");
				result.classList.remove("resultdraw");
				result.classList.remove("resultlose");
			}
			else if(clickedBtn === randomClasses[2] && computerSelected === randomClasses[0])
			{
				cScore.innerHTML = computerScore;
				computerScore++;
				result.innerHTML = "COM<br>WIN";
				result.classList.add("resultlose");
				result.classList.remove("resultdraw");
				result.classList.remove("resultwin");
			}
			else if(clickedBtn === randomClasses[2] && computerSelected === randomClasses[1])
			{
				pScore.innerHTML = playerScore;
				playerScore++;
				result.innerHTML = "PLAYER 1<br>WIN";
				result.classList.add("resultwin");
				result.classList.remove("resultdraw");
				result.classList.remove("resultlose");
			}
			
			document.getElementById("rock").style.pointerEvents = "initial";
			document.getElementById("paper").style.pointerEvents = "initial";
			document.getElementById("scissors").style.pointerEvents = "initial";
        });
    });
}
game();