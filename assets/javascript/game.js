
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


var randomWordArr = ["beer", "function", "cat"]
var randomWord = randomWordArr[Math.floor(Math.random()* randomWordArr.length)]

var s;
var wins = 0;
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
	}

}

function wrongLetter(letter){
	console.log("Wrong letter!")
	if(randomWord != letter){
	 $("#guessed").append(letter);
	}
}
function incrementWins(){
	console.log("Wins")
	alert("You Win")
	wins++;
	$("#wins").append(`<span>${wins}</span>`)
	restartGame();
}

function checkForWin(){
	console.log("Check for a win")
	console.log(randomWord)
	if(randomWord === answerArray.join('')){
	incrementWins();
	}
}

function restartGame(){
var anotherOne = prompt("Would you like to play another Y/N")
if (anotherOne === 'Y' ){
	console.log("Alrighty then")
}
}



});
// function Letter(){

// 	document.onkeyup = function(event){
// 	//here we get the letter that the user puts in the box
// 	var letter = event.key
// 	//make sure we have a guess (checks can be made here, only letters etc.)
// 		for (var i = 0; i < randomWord.length; i++){
// 			if (randomWord[i] === letter){
// 				answerArray[i] = letter;
// 				$("#answer").html(answerArray[i]);
// 			}else if (randomWord[i] !== letter){
				
// 			}
// 		}
// 	counts++;
// 	console.log(letter)
// 	document.getElementById("counter").innerHTML = "No of clicks: " + counts

// 	}

// }


// function GuessWrong(){
// }






