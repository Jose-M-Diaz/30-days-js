'use strict';

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk){
    guess = parseFloat(prompt("Where to Captain!(enter number between 0-6)"));
    if(guess != location1 || guess != location2 || guess != location3){
        prompt("Miss! ready to fire!(choose number)");
    }else{

    }
}

