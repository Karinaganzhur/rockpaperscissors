
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function(){
    var userChoice = $("#input").val().toLowerCase();
    rockPaperScissor(userChoice);
    $("#userChoice").text(userChoice);
});
 var userChoice;
 userChoice="rock"; 
 userChoice="paper"; 
 userChoice="scissors"; 

function rockPaperScissor(userChoice){
    let myArray = [];
    let computerChoice = Math.floor(Math.random() * 3);
    
    //display the result
    if(userChoice === "rock"){
        myArray = ["scissors", "rock", "paper"];
    } else if(userChoice === "scissors"){
        myArray = ["paper", "scissors", "rock"];
    } else if(userChoice === "paper"){
        myArray = ["rock", "paper", "scissors"];
    }
    
    $("#computerChoice").html(myArray[computerChoice]);
    
    
    logic(computerChoice);
}

function logic(computerChoice){
    let result;
    if(computerChoice < 1){
        result = "You Win!";
    } else if(computerChoice === 1){
        result = "It is a Tie!";
    } else if(computerChoice > 1){
        result = "You Lose!";
    }
    $("#result").html(result);
}

 var computerChoice = Math.random();

 var winner;
 winner="";

 $("#shoot").click(function(){
 var userChoice = $("#userChoice").val();
 var computerChoice = $("#computerChoice").val();
 var winner = $("#result").val();
}); 

 $("#shoot").click(function(){
  if(computerChoice > .888 && userChoice==="rock") {
         $("#result").html("There is a tie"); 
     }
     else  if(computerChoice > .888 && userChoice==="paper") {
         $("#result").html("User wins!");  
    }
     else  if(computerChoice > .888 && userChoice==="scissors") {
         $("#result").html("Computer wins"); 
    }
    else  if(computerChoice > .555 && userChoice==="scissors") {
         $("#result").html("User wins!"); 
    }
     else  if(computerChoice > .555 && userChoice==="paper") {
       $("#result").html("There is a tie"); 
     }
     else  if(computerChoice > .555 && userChoice==="rock") {
        $("#result").html("Computer wins!"); 
} 
     else  if(computerChoice < .555 && userChoice==="rock") {
        $("#result").html("User wins!"); 
     } 
      else  if(computerChoice < .555 && userChoice==="scissors") {
        $("#result").html("There is a tie"); 
     } 
    else  if(computerChoice < .555 && userChoice==="scissors") {
       $("#result").html("There is a tie"); 
    } 
     else{
         $("#result").html("Try again!"); 
    }
});


 var randomNumber;
 randomNumber= 0;

 $("#shoot").click(function(){
 var computerChoice = Math.random();
     console.log(computerChoice);
   
     if(computerChoice > .888) {
         $("#computerChoice").html("rock"); 
  }
    else if(computerChoice > .555){
        $("#computerChoice").html("paper"); 
    }
    else {
       $("#computerChoice").html("scissors");   
   }
});