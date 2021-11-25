"use strict"

let cadi = {
   make: "GM",
   model: "Cadillac",
   year: 1955,
   color: "tan",
   passengers: 5,
   convertible: false,
   mileage: 12892
};
let chevy = {
   make: "Chevy",
   model: "Bel Air",
   year: 1957,
   color: "red",
   passengers: 2,
   convertible: false,
   mileage: 1021
};
let taxi = {
   make: "Webville Motors",
   model: "Taxi",
   year: 1955,
   color: "yellow",
   passengers: 4,
   convertible: false,
   mileage: 281341
};

cadi.started = false;
chevy.started = false;
taxi.started = false;

cadi.start = function() {
   this.started = true;
}
cadi.stop = function() {
   this.started = false;
}
cadi.drive = function() {
   if (this.started) {
      alert(this.make + " " +
            this.model + " goes zoom zoom!");
   }
}

chevy.start = function() {
   this.started = true;
}
chevy.stop = function() {
   this.started = false;
}
chevy.drive = function() {
   if (this.started) {
      alert(this.make + " " +
            this.model + " goes zoom zoom!");
   }
}

taxi.start = function() {
   this.started = true;
}
taxi.stop = function() {
   this.started = false;
}
taxi.drive = function() {
   if (this.started) {
      alert(this.make + " " +
            this.model + " goes zoom zoom!");
   }
}

cadi.start();
cadi.drive();
cadi.stop();

chevy.start();
chevy.drive();
chevy.stop();

taxi.start();
taxi.drive();
taxi.stop();


