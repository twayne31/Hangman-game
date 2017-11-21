
// document.onkeyup = function(event){
// populate information  
// userStarts = event.key;
// word = "madonna";
// emptyArray = []
// wordLength = word.indexOf("madonna")
// for(var i = 0; i< word.length; i++){
// 	// if(userInput === word[i]){

// 	emptyArray.push(" __ ")
// 	// console.log(emptyArray);
// 	$("#wordShow").append("<span> " + " __ " + " </span>")
// 	}	

// // window.addEventListener("keydown", checkKeyPress, false);

// // function checkKeyPress(key){
// // 	if(key.keyCode == "65"){
// // 		console.log("you pressed the a")
// // 	}
// // }


// var numTries = 12;
// populate the empty spaces length
	

	
	
// 	console.log("numTries:" + numTries)
	
// 	//compare the value entered to the word
	
// 	// console.log(userInput);
// 	// document.getElementById("guessed").textContent += userInput;

// 	// 	}
	

// }




// numTries--;	

// }


//function if the player wins 
// var playerWins = function(){
// 	wins++
// }
$(function(){


var randomWordArr = ["beer", "function", "cat", "again", "done", "splendifirous", "trapping"]
var randomWord = randomWordArr[Math.floor(Math.random()* randomWordArr.length)]

var s;
var wins = 0;
var guesses = 12;
var answerArray = [];


//startUp function 
for (var i = 0; i < randomWord.length; i++){
		answerArray[i] = " __ ";
		// console.log(answerArray[i])
		s = answerArray.join('');
		console.log(s)
}
		
		$("#answer").html(s)


	//put them in a string



document.onkeyup = function(e){


	//letter we get from user
	var letter = e.key
	var didIFindALetter = false;
	for (var i = 0; i < randomWord.length; i++){
		if(randomWord[i] === letter){
			answerArray[i] = letter;
			didIFindALetter = true;
			$("#answer").html(" "+answerArray+" ");
			checkForWin();
		}
	}
	if (!didIFindALetter) {
		wrongLetter(letter);
		guessRemaining();
	}

}

function wrongLetter(letter){
	if(randomWord != letter){
	 $("#guessed").append(letter);
	}
}
function incrementWins(){
	alert("You Win")
	wins++;
	$("#wins").append(`<span>${wins}</span>`)
}

function checkForWin(){
	console.log(randomWord)
	if(randomWord === answerArray.join('')){
	incrementWins();
	}
}


function restartGame(){
var anotherOne = prompt("Would you like to play another Y/N")
if (anotherOne === 'Y' ){
}
}

function guessRemaining(){
	$("#guess").append(`<span>${guesses +","}</span>`)
	guesses--;
	if (guesses === 0){
	$("#guess").append(`<span>${" GAME OVER "}</span>`)
	}
	
}
	// var guesses = 12
	// guesses--;
	// if (guesses <= 0){
	// 	alert("GAME OVER")
	// }
	// $("#guess").append(`<span>${guesses}</span>`)



});







