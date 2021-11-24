"use strict"

let scores = [60, 50, 69, 58, 54, 54, 58, 50, 52, 54, 48, 69];
let costs = [.25, .27, .25, .33, .31, .25, .29, .21, .24, .25, .32, .24];
let largest = 0;
let largestIndexesArr = [];
let soughtForIndex;

function printAndGetHighScore(scores) {
   for (let i = 0; i < scores.length; i++) {
      console.log(`Bubble solution # ${i} score: ${scores[i]}`);
      if (scores[i] > largest) {
         largest = scores[i];
      }
   }
}

printAndGetHighScore(scores);
console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${largest}`);

function getHighScoreIndexes(scores, largest) {
   for (let i = 0; i < scores.length; i++) {
      if (scores[i] === largest) {
         largestIndexesArr.push(i);
      }
   }
}
getHighScoreIndexes(scores, largest);

console.log("Solution with highest score: " + largestIndexesArr);

function getMostCostEffectiveSolution(scores, costs, highScore) {
   let minCost = 1;
   for (let i = 0; i < scores.length; i++) {
      if (scores[i] === highScore) {
         if (minCost > costs[i]) {
            soughtForIndex = i;
            minCost = costs[i];
         }
      }
   }
}
getMostCostEffectiveSolution(scores, costs, largest);
console.log("Bubble Solution #" + soughtForIndex + " is the most cost effective");
