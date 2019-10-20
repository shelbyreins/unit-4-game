$(document).ready(function(){
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreDisplay = 0;

var image1 = 0;
var image2 = 0;
var image3 = 0;
var image4 = 0;

$("#wins").html(wins);
$("#losses").html(losses);
$("#scoreDisplay").html(scoreDisplay);
$("#scoreDisplay").html(totalScore);


//Functions created for win/lose. Will use later
function won(){
    wins++;
    alert("You won!");
    $("#wins").html(wins);
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

//Adding the random number value to page
$("#randomNum").text(randomNum);

//Randoms numbers for each crystal between 1 - 12, 
image1 = Math.floor(Math.random() * 11 + 1);
image2 = Math.floor(Math.random() * 11 + 1);
image3 = Math.floor(Math.random() * 11 + 1);
image4 = Math.floor(Math.random() * 11 + 1);
var pointArray= [image1, image2, image3, image4];



var crystalOneImg = $('<img src="assets/images/crystal1.png" id = "cry1" alt= "cry1"/>');
crystalOneImg.attr("data-value", pointArray[0]);
$(".images").append(crystalOneImg);

var crystalTwoImg = $('<img src="assets/images/crystal2.png" id = "cry2" alt= "cry2"/>');
crystalTwoImg.attr("data-value", pointArray[1]);
$(".images").append(crystalTwoImg);

var crystalThreeImg = $('<img src="assets/images/crystal3.png" id = "cry3"  alt= "cry3"/>');
crystalThreeImg.attr("data-value", pointArray[2]);
$(".images").append(crystalThreeImg);

var crystalFourImg = $('<img src="assets/images/crystal4.png" id = "cry4"  alt= "cry4"/>');
crystalFourImg.attr("data-value", pointArray[3]);
$(".images").append(crystalFourImg);


//Set up clicks for all four crystals

$(document).on("click", "#cry1", function(){
    var value = ($(this).attr("data-value"));
    value = parseInt(value);
    totalScore= totalScore+ value;
    console.log(this);
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore >= randomNum){
        lost();
    }
   
})
$(document).on("click", "#cry2", function(){
    var value = ($(this).attr("data-value"));
    value = parseInt(value);
    totalScore= totalScore+ value;
    console.log(this);
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore >= randomNum){
        lost();
    }
})
$(document).on("click", "#cry3", function(){
    var value = ($(this).attr("data-value"));
    value = parseInt(value);
    totalScore= totalScore+ value;
    console.log(this);
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore >= randomNum){
        lost();
    }
})
$(document).on("click", "#cry4", function(){
    var value = ($(this).attr("data-value"));
    value = parseInt(value);
    totalScore= totalScore+ value;
    console.log(this);
    $("#scoreDisplay").html(totalScore);
    if (totalScore === randomNum){
        won();
    }
    else if (totalScore >= randomNum){
        lost();
    }
})

//Set up clicks for 4 crystals

// $("#cry1").on("click",function(){
    // totalScore = totalScore + image1;
    // $("#scoreDisplay").html(totalScore);
//     if (totalScore === randomNum){
//         won();
//     }
//     else if (totalScore > randomNum){
//         lost();
//     }

//     });

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


