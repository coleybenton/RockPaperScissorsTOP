function computerPlay() {

    let randomNumber = Math.floor(Math.random()*10);

    if (randomNumber < 3) {

      return "rock";

    } else if (randomNumber > 3 && randomNumber < 7) {

      return "paper";

    } else {

      return "scissors";

    }

  };


  const resultsDiv = document.querySelector("#results-div");
  const rockButton = document.querySelector("#rock-button");
  const paperButton = document.querySelector("#paper-button");
  const scissorsButton = document.querySelector("#scissors-button");

 

  let win;
  let lose;
  let tied; 
  
  function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    win = `Win! ${playerSelection} beats ${computerSelection}`;
    lose = `Lose! ${computerSelection} beats ${playerSelection}`;
    tied = "Tied!";
    if (playerSelection == computerSelection) {
      return tied;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {   return win;
          
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      return lose;
          
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return lose;
      
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return win; 
      
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return lose; 
     
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return win;
    };
    	  
  };

let playerScore = 0;
let computerScore = 0;

function game(e) {
  let result = playRound(e.currentTarget.playerSelection);
  if (result == win && playerScore < 5 && computerScore < 5) {
      playerScore++;    
      resultsDiv.textContent = `You won this round! Your score: ${playerScore}. Computer's score: ${computerScore}`;
    } else if (result == lose && playerScore < 5 && computerScore < 5) {
      computerScore++;
      resultsDiv.textContent = `You lost this round! Your score: ${playerScore}. Computer's score: ${computerScore}`;
    } else if (result == tied && playerScore < 5 && computerScore < 5){
      resultsDiv.textContent = `No change in score. Your score: ${playerScore}. Computer's score: ${computerScore}`;
    };
  
  tieIf: if (computerScore == 5 && playerScore == 5) {
        resultsDiv.textContent = "Game Over - You Tied! Refresh the page to play again!";
        break tieIf;
  };
  winnerIf: if (computerScore < 5 && playerScore == 5) {
        resultsDiv.textContent = "Game Over - You Won! Refresh the page to play again!";
	break winnerIf;
    }; 
  loserIf: if (computerScore == 5 && playerScore < 5) {
        resultsDiv.textContent = "Game Over - You Lost! - Refresh the page to play again!";
	break loserIf;
    };
    
};  

  rockButton.addEventListener("click", game);
  paperButton.addEventListener("click", game);
  scissorsButton.addEventListener("click", game);
  rockButton.playerSelection = "rock";
  paperButton.playerSelection = "paper";
  scissorsButton.playerSelection = "scissors";
/* Notes:
 *
 * JS code - Problem Solving method - Restate the Problem (RP), Plan (Pl), Pseudocode (Ps)

-----------------------------------------------------------------------------------------------------------------------------------------------------------

/* Step 1: Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

-----------------------------------------------------------------------------------------------------------------------------------------------------------

RP: Let's create our opponent by making a function called "computerPlay": this function does not need parameters and it will only return 1 out of 3 possible choices by a random selection (rock, paper, scissors).

 

Pl: So lets first initialize the function, name it computerPlay, with no parameters. Then lets use a math method to generate a random number and assign that number to a variable. After that, we can tell the function to return a choice (string) (rock, paper or scissors) based on the value of that variable (1-3 rock, 3-6 paper, 7-10 scissors);

 

Ps:

- create a function called computerPlay

- inside function generate random number using math.random() method

- nest result inside math.floor() method to round the result to the nearest integer

- multiply result by 10

- assign result of math.floor(math.random()*10) to variable randomNumber

- if randomNumber < 3 return string "rock"

- else if randomNumber > 3 and randomNumber < 7 return string "paper"

- else return "scissors"

<<<<<<< HEAD
------------------------------------------------------------------------
=========================================================================
=======
-----------------------------------------------------------------------------------------------------------------------------------------------------------

code: 

 

function computerPlay() {

  let randomNumber = Math.floor(Math.random()*10);

    if (randomNumber < 3) {

      return "rock";

    } else if (randomNumber > 3 && randomNumber < 7) {

      return "paper";

    } else {

      return "scissors";

    }

};

/*

===========================================================================================================================================================
>>>>>>> 16cd09f7294a8d7665b20a7424da2a516559c82d

test in console: console.log(computerPlay());

test error - math is undefined

solution - capitalize "m" in math to Math

 

test2 in console: console.log(computerPlay());

test success! rock, paper, and scissors strings are randomly generated when function runs

===========================================================================================================================================================

Step 2: Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

-----------------------------------------------------------------------------------------------------------------------------------------------------------

RP: Create a function for a single round of our game that takes two parameters (playerSelection, computerSelection) and returns a string " and why "You Lose! Paper beats Rock". Parameter playerSelection has to be case-insensitive too.

 

Pl: Okay so we're going create the function and call it playRound. It will take the two parameters (playerSelection, computerSelection). To get the playerSelection value, we can prompt for user input, with string "Please enter: rock, paper or scissors" and store it in playerSelection. We also have to make sure that the parameter playerSelection is case-insensitive, and we will nest the result within the toLowerCase() method. Afterwards, compare the values of the two parameters, and display the result in a relevant string.  Let's also put an alert that triggers if the value of playerSelection is not rock, paper, or scissors (ex: red, house, 254).



Ps:
- create function playRound w/ parameters (playerSelection, computerSelection)
- inside function: playerSelection equals toLowerCase (prompt with placeholder string "Please enter: rock, paper, or scissors")
- if else statements for each outcome 


<<<<<<< HEAD
========================================================================
=======
code: added win and lose as global variables for later reference in game() function 
let win;
let lose;

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please enter: rock, paper, or scissors");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  win = `Win! ${playerSelection} beats ${computerSelection}`;
  lose = `Lose! ${computerSelection} beats ${playerSelection}`;
  let tied = "Tied!";
  if (playerSelection == computerSelection) {
    return `${tied}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return win;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return lose;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return lose;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return win; 
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return lose; 
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return win;
  } else {
    return "Please select rock, paper, or scissors!";
  }
};

/*
===========================================================================================================================================================
>>>>>>> 16cd09f7294a8d7665b20a7424da2a516559c82d
test in console: 
console.log(computerPlay());
console.log(playRound());
entering in rock, Rock, PAPER, and house into prompt

test error toLowerCase is not defined
researched proper usage, updating code
rerunning tests

test error rock is not defined
updating switch and case to be strings 
put semicolons for case codes
rerunning tests

test error default returned
replacing switch statement with if/else statements
rerunning tests

test error else script runs instead of intended if/else if script
assigned playerSelection to result of method
rerunning tests

test success - computerPlay() function does not feed into playRound()...duh
- received intended output "Lose! paper beats rock" when inputting "rock" into prompt and setting computerSelection parameter to "paper" - console.log(playRound("", "paper"));
- attempting Rock with "rock" computerSelection parameter - success!
  - received intended output "Tied!"
- attempting PAPER with "sciSsOrS" - error
  - received else output instead of intended...
  - computerSelection output will always be correct b/c of other function
  - bad test
- attempting PAPER with "scissors" - success
- attempting house with "scissors" - success

Tests success - playRound() outputs corresponding outputs as intended.
Tested other outcomes just to be safe - success! 
Referenced computerPlay() function within playRound() by assigning to computerSelection
Now we don't have to type parameters
===========================================================================================================================================================

Step 3: Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

RP: So we want to create a new function, named game() that references the playRound function. We want to go to a set 5 rounds, keep score, and reports a winner or loser at the end.

Pl: Create the new function called game(), reference the playRound function. To go to 5 rounds, lets house this in a for loop, and assign each player a score variable that increments when they win, as well as returning a winner/loser string at the end of the 5 rounds.*

Ps: 
create function game()
within game: for loop(to 5)
within for loop: 
  create variable playerScore
  create variable computerScore
  playRound()
  if (win): playerScore++
  else if (lose): computerScore++
  else return "No change in score"
close for loop
within game: if statement, increments score based on result & displays score every turn


<<<<<<< HEAD
===============================================================================Test in console - The struggle, had to end up declaring two global variables (win, lose) so they could be referenced to be increased.
Success! - in the console, inputting game(); will prompt for choice, tell you if you won/lost round, list new score of you and computer, tell you if you won/lost at the end of the 5 games.
===============================================================================Project Complete!
=======
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result == win) {
      playerScore++;
      console.log("You won this round!");
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer's score: ${computerScore}`);
    } else if (result == lose) {
      computerScore++;
      console.log("You lost this round!");
      console.log(`Your score: ${playerScore}`);
      console.log(`Computer's score: ${computerScore}`);
    } else {
      console.log("No change in score");
    }
  };

    if (playerScore == 5 || playerScore > computerScore) {
      return "Winner!";
    } else if (computerScore == 5 || computerScore > playerScore) {
      return "Loser!";
    } else {
      return "Tie!";
    }
};
/*
===========================================================================================================================================================- Test in console - The struggle, had to end up declaring two global variables (win, lose) so they could be referenced to be increased.
- Success! - in the console, inputting game(); will prompt for choice, tell you if you won/lost round, list new score of you and computer, tell you if you won/lost at the end of the 5 games.
===========================================================================================================================================================Project Complete!
>>>>>>> 16cd09f7294a8d7665b20a7424da2a516559c82d
*/


