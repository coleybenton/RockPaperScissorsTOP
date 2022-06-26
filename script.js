/* JS code - Problem Solving method - Restate the Problem, Plan, Pseudocode

-------------------------------------------------------------------------

/* Step 1: Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

------------------------------------------------------------------------

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

------------------------------------------------------------------------

code: */

 

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

=========================================================================

test in console: console.log(computerPlay());

test error - math is undefined

solution - capitalize "m" in math to Math

 

test2 in console: console.log(computerPlay());

test success! rock, paper, and scissors strings are randomly generated when function runs

=========================================================================

Step 2: Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

-----------------------------------------------------------------

RP: Create a function for a single round of our game that takes two parameters (playerSelection, computerSelection) and returns a string " and why "You Lose! Paper beats Rock". Parameter playerSelection has to be case-insensitive too.

 

Pl: Okay so we're going create the function and call it playRound. It will take the two parameters (playerSelection, computerSelection). To get the playerSelection value, we can prompt for user input, with string "Please enter: rock, paper or scissors" and store it in playerSelection. We also have to make sure that the parameter playerSelection is case-insensitive, and we will nest the result within the toLowerCase() method. Afterwards, compare the values of the two parameters, and display the result in a relevant string.  Let's also put an alert that triggers if the value of playerSelection is not rock, paper, or scissors (ex: red, house, 254).



Ps:
- create function playRound w/ parameters (playerSelection, computerSelection)
- inside function: playerSelection equals toLowerCase (prompt with placeholder string "Please enter: rock, paper, or scissors")
- if else statements for each outcome 


code:*/

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please enter: rock, paper, or scissors");
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tied!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return `Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return `Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return `Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Please select rock, paper, or scissors!";
  }
};

/*
========================================================================
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

tests success - playRound() outputs corresponding outputs as intended.
Tested other outcomes just to be safe - success! 
*/
