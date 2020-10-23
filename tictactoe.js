//Made by Robert Hollinger
//Last edit 10/22/2020

let playerTurn = true;
let computerMoveTimeout = 0;
let count = 0;

window.addEventListener("DOMContentLoaded", domLoaded);


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function domLoaded() {
	// Setup the click event for the "New game" button
	let newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event listeners for each cell in the game board
	let cells = getGameBoard();
	for (let cell of cells) {
		cell.addEventListener("click", function () { cellClicked(cell); });
	}

	// Call newGame() to make sure the board is clear
	newGame();
}

// Returns an array of 9 <td> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoard() {
	let gameBoardTable = document.getElementById("gameBoard");
	let result = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			result.push(gameBoardTable.rows[i].cells[j]);
		}
	}
	return result;
}

function newGame() {
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;
	count = 0;
	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
				document.getElementById("gameBoard").rows[i].cells[j].innerHTML = "&nbsp;";
		}
	}
	playerTurn = true;
	document.getElementById("turnInfo").innerHTML = "Your turn";
}

function cellClicked(cell) {
	if(playerTurn == true && cell.innerHTML=="&nbsp;"){
		cell.innerHTML = "X";
		cell.style.color = "red";
		count++;
		console.log("successful cellclicked for player");
		if(count >= 9){
			console.log("game over");
			playerTurn = false;
			document.getElementById("turnInfo").innerHTML = "Tie game";
			count = 0;
			return;
		}
		switchTurn();
	}
}

function switchTurn() {
	if(playerTurn == true){
		playerTurn = false;
		console.log("Switched from true to false");
		document.getElementById("turnInfo").innerHTML = "Computer's turn";
		count++;
		computerMoveTimeout = setTimeout(makeComputerMove(), 1000);
	}
	else{
		playerTurn = true;
		document.getElementById("turnInfo").innerHTML = "Your turn";
		console.log("Switched from false to true");
	}
	
	
	//Check for horizontal wins
	if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[0].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[1].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[0].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[1].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	
	//check for vertical wins
	else if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[1].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[2].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[1].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[2].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
		return;
	}
	
	//Check for diag wins
	else if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "X" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "X" && document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "X"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[0].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[2].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else if(document.getElementById("gameBoard").rows[2].cells[0].innerHTML == "O" && document.getElementById("gameBoard").rows[1].cells[1].innerHTML == "O" && document.getElementById("gameBoard").rows[0].cells[2].innerHTML == "O"){
		playerTurn = false;
		document.getElementById("turnInfo").innerHTML = "You win!";
		return;
	}
	else
		return;
}

function makeComputerMove() {
	let a = randomIntFromInterval(0, 2);
	let b = randomIntFromInterval(0, 2);
	while(document.getElementById("gameBoard").rows[a].cells[b].innerHTML != "&nbsp;"){
		a = randomIntFromInterval(0,2);
		b = randomIntFromInterval(0,2);
	}
	document.getElementById("gameBoard").rows[a].cells[b].innerHTML = "O";
	document.getElementById("gameBoard").rows[a].cells[b].style.color = "blue";
	console.log("ran makeComputerMove");
	switchTurn();
}