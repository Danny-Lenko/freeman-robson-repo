"use strict"

let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

for (let i = 0; i < hasBubbleGum.length; i++) {
   if (hasBubbleGum[i]) {
      console.log(products[i] + " contains bubble gum");
   }
}