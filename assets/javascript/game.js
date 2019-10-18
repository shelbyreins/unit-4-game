$(document).ready(function(){
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreDisplay = 0;

$("#wins").html(wins);
$("#losses").html(losses);
$("#scoreDisplay").html(scoreDisplay);
$("#scoreDisplay").html(totalScore);

//Functions created for win/lose. Will use later
function won(){
//Increases wins
    wins++;
//Alert letting player know they won
    alert("You won!");
//Displays wins
    $("#wins").html(wins);
//Restart game using functions below
    restart();
    };

function lost(){
    losses++;
    alert("Sorry, you lose! Better luck next time..");
    $("#losses").html(losses);
    restart(); 
    };

//Seclects a random number between 19 - 120 
var randomNum = Math.floor(Math.random() * 101 + 19);

$("#randomNum").text(randomNum);

//Randoms numbers for each crystal between 1 - 12
var image1 = Math.floor(Math.random() * 11 + 1);
var image2 = Math.floor(Math.random() * 11 + 1);
var image3 = Math.floor(Math.random() * 11 + 1);
var image4 = Math.floor(Math.random() * 11 + 1);

//Set up clicks for 4 crystals

$("#cry1").on("click",function(){
//Adding the crystals random number to the total score
    totalScore = totalScore + image1;
//Displaying the total score on the screen
    $("#scoreDisplay").html(totalScore);
//win and lose conditionals
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    });

$("#cry2").on("click", function(){
    totalScore = totalScore + image2;
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    });

$("#cry3").on("click", function(){
    totalScore = totalScore + image3;
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    });

$("#cry4").on("click", function(){
    totalScore = totalScore + image4;
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    });

    //Restarts the game. 
function restart(){
    randomNum = Math.floor(Math.random() * 101 + 19)
    $("#randomNum").text(randomNum);
    image1 = Math.floor(Math.random() * 11 + 1);
    image2 = Math.floor(Math.random() * 11 + 1);
    image3 = Math.floor(Math.random() * 11 + 1);
    image4 = Math.floor(Math.random() * 11 + 1);  
    scoreDisplay = 0;
    $("#scoreDisplay").html(scoreDisplay);
    totalScore = 0;
    };

}); 
