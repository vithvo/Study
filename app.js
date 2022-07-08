// // Functions

// let makeNoise = function () {
//   console.log("Хрясь!");
// };
// makeNoise();
// // → Хрясь!
// let power = function (base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) result *= base;
//   return result;
// };
// console.log(power(2, 10));
// // → 1024

// var landscape = function () {
//   var result = "";
//   var flat = function (size) {
//     for (var count = 0; count < size; count++) result += "_";
//   };
//   var mountain = function (size) {
//     result += "/";
//     for (var count = 0; count < size; count++) result += "'";
//     result += "\\";
//   };
//   flat(7);
//   mountain(7);
//   flat(6);
//   mountain(1);
//   flat(1);
//   return result;
// };
// console.log(landscape());

// console.log("The future says:", future());
// function future() {
//   return "We STILL have no flying cars.";
// }

// function greet(who) {
//   console.log("Привет, " + who);
// }
// greet("Семён");
// console.log("Покеда");

// function power(base, exponent) {
//   if (exponent == undefined) exponent = 2;
//   var result = 1;
//   for (var count = 0; count < exponent; count++) result *= base;
//   return result;
// }
// console.log(power(4));

// console.log(power(4, 3));

function wrapValue(n) {
  var localVariable = n;
  return function () {
    return localVariable;
  };
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
