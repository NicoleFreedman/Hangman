
	// Exercise 20:
	// Hangman
	// _ A _ _ _
	// lives: 9


	let words = ["javascript", "monkey", "amazing", "Pancake", "banana", "Orange", "apple", "mango"];
	let word = words[Math.floor(Math.random()*words.length)];
	let lives = 10;
	let answerArray = [];

	for (var i = 0; i < word.length; i++) {
		answerArray.push("_");
	}

	let remainingLetters = word.length;

	while (lives > 0 && remainingLetters>0) {

 // Show the player their progress
 		alert(answerArray.join(" ") + "\nLives: " + lives);

 // Take input from the player
 		let guess = prompt("Guess a letter, or click Cancel to stop playing").toLowerCase();

 // Update answerArray and remainingLetters for every correct guess
 		 if(guess.length !== 1){
 			alert("Please enter a single letter");
 		} else
 			{
 				let rightGuess = false;
	 			for (let i = 0; i < word.length; i++) {
					if(word[i] == guess){
						answerArray[i] = guess;
						remainingLetters--;
						rightGuess = true;
		 			} 
				} 
				if(rightGuess==false){
					lives--;
				}
		  
		  }
		 if(remainingLetters===0){
 			alert("Congratulation! The word is " + answerArray.join(""));
 		} 
 		  if(lives===0){
 			alert("You're dead");
 		}
	}	
	



