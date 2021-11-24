"use strict"

let scores = [60, 50, 69, 58, 54, 54, 58, 50, 52, 54, 48, 69];
let largest = scores[0];
let largestIndexesArr = [];
let largestIndex1;
let largestIndex2;

for (let i = 0; i < scores.length; i++) {
   console.log(`Bubble solution # ${i} score: ${scores[i]}`);
   if (scores[i] > largest) {
      largest = scores[i];
   }
}

for (let i = 0; i < scores.length; i++) {
   if (scores[i] === largest) {
      largestIndexesArr.push(i);
   }
}

largestIndex1 = largestIndexesArr[0];
largestIndex2 = largestIndexesArr[1];

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${largest}`);
console.log(`Solution with highest score: #${largestIndex1}, #${largestIndex2}`);
