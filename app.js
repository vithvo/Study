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

// function wrapValue(n) {
//   var localVariable = n;
//   return function () {
//     return localVariable;
//   };
// }
// var wrap1 = wrapValue(1);
// var wrap2 = wrapValue(2);
// console.log(wrap1());
// // → 1
// console.log(wrap2());
// // → 2

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// let twice = multiplier(2);

// console.log(multiplier());
// console.log(twice(5));
// // → 10

// function power(base, exponent) {
//   if (exponent == 0) return 1;
//   else return base * power(base, exponent - 1);
// }
// console.log(power(3, 3));
// // → 8

// function findSolution(target) {
//   function find(start, history) {
//     if (start == target) return history;
//     else if (start > target) return null;
//     else
//       return (
//         find(start + 5, "(" + history + " + 5)") ||
//         find(start * 3, "(" + history + " * 3)")
//       );
//   }
//   return find(1, "1");
// }
// console.log(findSolution(13));

// // вывестиИнвентаризациюФермы
// function printFarmInventory(cows, chickens) {
//   var cowString = String(cows);
//   while (cowString.length < 3) cowString = "0" + cowString;
//   console.log(cowString + " Коров");
//   var chickenString = String(chickens);
//   while (chickenString.length < 3) chickenString = "0" + chickenString;
//   console.log(chickenString + " Куриц");
// }
// printFarmInventory(7, 11);

// // выводСДобавлениемНулейИМеткой
// function printZeroPaddedWithLabel(number, label) {
//   var numberString = String(number);
//   while (numberString.length < 3) numberString = "0" + numberString;
//   console.log(numberString + " " + label);
// }
// // вывестиИнвентаризациюФермы
// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Коров");
//   printZeroPaddedWithLabel(chickens, "Куриц");
//   printZeroPaddedWithLabel(pigs, "Свиней");
// }
// printFarmInventory(7, 11, 3);

// добавитьНулей
function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) string = "0" + string;
  return string;
}
// вывестиИнвентаризациюФермы
function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Коров");
  console.log(zeroPad(chickens, 3) + " Куриц");
  console.log(zeroPad(pigs, 3) + " Свиней");
}
printFarmInventory(7, 16, 3);
