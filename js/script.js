// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice;
userChoice ="";
$("#shoot").click(function() {
    var userChoice = $("#input").val();
 $("#userChoice").text(userChoice);
});




var randomNumber = 0;
     $("#shoot").click(function(){
var randomNumber = Math.random();
 console.log(randomNumber);
    if( randomNumber> .801) {
        $("#computerChoice").html("paper"); 
    }
    else if(randomNumber> .609){
        $("#computerChoice").html("rock");}
     else {
        $("#computerChoice").html("scissors");
         
     }
     });
     
var winner;
