"use strict"

let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

let i = 0;
while(i < hasBubbleGum.length) {
   if (hasBubbleGum[i]) {
      console.log(products[i] + " contains bubble gum");
   }
   i++;
}