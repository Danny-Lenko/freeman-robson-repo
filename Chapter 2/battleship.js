"use strict"

let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let guessesTotal = 0;
let hits = 0;
let isSunk = false;

while (!isSunk) {
   guess = +prompt("Ready, aim, fire! (enter a number 0-6):");
   if (guess < 0 || guess > 6) {
      alert("Please, put a number required");
   } else {
      guessesTotal++;
      if (guess === location1
         || guess === location2
         || guess === location3) {
            alert("A ship is hit!");
            hits++;
      } else {
         alert("You've missed...");
      }
      if (hits === 3) {
         isSunk = true;
      }
   }
}
alert(`You've won! Your score is ${guessesTotal}`);

