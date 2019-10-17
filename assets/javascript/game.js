$(document).ready(function(){
var wins = 0;
var losses = 0;
var totalScore = 0;

//Seclects a random number between 19 - 120 
var randonNum = Math.floor(Math.random() * 101 + 19)

//Randoms numbers for each crystal between 1 - 12

var cry1 = Math.floor(Math.random() * 11 + 1)
var cry2 = Math.floor(Math.random() * 11 + 1)
var cry3 = Math.floor(Math.random() * 11 + 1)
var cry4 = Math.floor(Math.random() * 11 + 1)

$("#randonNum").html(randonNum);





});
