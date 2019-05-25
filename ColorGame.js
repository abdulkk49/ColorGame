var pickedColor;
var numReq = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	reset();
	setupModeButtons();
	setupSquares();
	
}

resetButton.addEventListener("click", function(){
	reset();
});

//Mode button listeners 
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numReq = 3 : numReq = 6;
			reset();
		});
	}
}

//Squares Listeners
function setupSquares(){
	for(var i = 0; i < squares.length; i++){ 
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";

			}
		});
	}
}

//function to generate a random color
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function to generate a random color array
function generateColorsArray(num){
	var arr = [];
	//pick a random color for each entry
	//loop till num
	for(i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//function to pick a random color from colours array
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to assign colors to squares, pick a target color
function reset(){
	colors = generateColorsArray(numReq);
	//pick a new target color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//assign colors to squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	} 
	//refactor certain elements
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

//function to change all squares to same color on winning
function changeColors(color){
	//loop through all squares
	for(var i = 0; i< squares.length; i++){
		//change color to match given color
		squares[i].style.background = color;
	}
}


//*******************INITIAL ATTEMPT*******************
// easyButton.addEventListener("click", function(){
	// 	this.classList.add("selected");
	// 	hardButton.classList.remove("selected");
	//numReq =3;
	// colors = generateColorsArray(numReq);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;

	// for(var i = 0; i < squares.length; i++){
	// 	if(colors[i]){
	// 		squares[i].style.background = colors[i];
	// 	}
	// 	else{
	// 		squares[i].style.display = "none";
	// 	}
	// } 
//*****************************************************
// hardButton.addEventListener("click", function(){
	// 	this.classList.add("selected");
	// 	easyButton.classList.remove("selected");
	// 	numReq = 6;
	// 	colors = generateColorsArray(numReq);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;

	// 	for(var i = 0; i < squares.length; i++){
	// 		squares[i].style.background = colors[i];
	// 		squares[i].style.display = "block";

	// 	} 
	// });
//******************************************************
//inside reset button
	//generate new colors array
	// colors = generateColorsArray(numReq);
	// //pick a new target color
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// //assign colors to squares
	// for(var i = 0; i < squares.length; i++){
	// squares[i].style.background = colors[i];
	// } 
	// //refactor certain elements
	// h1.style.background = "steelblue";
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";