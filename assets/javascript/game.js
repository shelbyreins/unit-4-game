$(document).ready(function(){
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreDisplay = 0;

//Seclects a random number between 19 - 120 
var randomNum = Math.floor(Math.random() * 101 + 19);

$("#randomNum").text(randomNum);

//Randoms numbers for each crystal between 1 - 12
var image1 = Math.floor(Math.random() * 11 + 1);
var image2 = Math.floor(Math.random() * 11 + 1);
var image3 = Math.floor(Math.random() * 11 + 1);
var image4 = Math.floor(Math.random() * 11 + 1);

$("#wins").text(wins);
$("#losses").text(losses);
$("#scoreDisplay").text(scoreDisplay);

function won(){
    wins++;
    alert("You won!");
    $("#wins").text(wins);
    restart();
}

function lost(){
    losses++;
    alert("Sorry, you lose! Better luck next time..");
    $("#losses").text(losses);
    restart(); 
}

//Set up clicks for crystals
$("#cry1").on("click",function(){
//
    totalScore = totalScore + image1;
    $("#scoreDisplay").text(totalScore);
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
    $("#scoreDisplay").text(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    })

$("#cry3").on("click", function(){
    totalScore = totalScore + image3;
    $("#scoreDisplay").text(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    })

$("#cry4").on("click", function(){
    totalScore = totalScore + image4;
    $("#scoreDisplay").text(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore > randomNum){
        lost();
    }

    });

function restart(){
    randomNum = Math.floor(Math.random() * 101 + 19)
    $("#randomNum").text(randomNum);
    image1 = Math.floor(Math.random() * 11 + 1);
    image2 = Math.floor(Math.random() * 11 + 1);
    image3 = Math.floor(Math.random() * 11 + 1);
    image4 = Math.floor(Math.random() * 11 + 1);  
    scoreDisplay = 0;
    $("#scoreDisplay").text(scoreDisplay);
    totalScore = 0;
    }



}); 
