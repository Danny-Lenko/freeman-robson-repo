"use strict"

let location1 = 0;
let location2 = 0;
let location3 = 0;

let guess;
let guessesTotal = 0;
let hits = 0;
let isSunk = false;
let accuracy;

function defineShipLocation() {
   location1 = Math.floor(Math.random() * 5);
   location2 = location1 + 1;
   location3 = location2 + 1;
}
defineShipLocation();

console.log(location1);
console.log(location2);
console.log(location3);

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
         alert('Enemy ship has been destroyed!');
      }
   }
}
accuracy = 3 / guessesTotal * 100;
alert (`
   You've won! It took you ${guessesTotal} tries. 
   Your accuracy is ${accuracy}%
`);

