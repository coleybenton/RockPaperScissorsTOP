/*So, our goal is to create a simple implementation of the kids game "rock paper scissors".
 
 Problem Solving method - 3 step - Restate the problem, Plan, Pseudocode

 Constraints:
 - User vs Computer(random choices mapped to 
 - 3 options, only one can be chosen (rock, paper, scissors)
 - Each option wins/lose depending on the other option selected
 - If both players choose same option, tie, no points either
 - If you win add 1 to score, losing does nothing to score
 - Both players start with 0 score
 
 To start, our game will play against the computer, so lets create a function called computerPlay that will randomly return any of our three options "Rock, Paper, Scissors". This will  
