// Asinc function

// let bigOak = require("https://eloquentjavascript.net/code/crow-tech.js").bigOak;

// var defineRequestType =
//   require("https://eloquentjavascript.net/code/crow-tech.js").defineRequestType;
import { bigOak } from "./crow-tech.js";
// import { bigOak } from "https://eloquentjavascript.net/code/crow-tech.js";
console.log(bigOak);
// bigOak.readStorage("food caches", (caches) => {
//   let firstCache = caches[0];
//   bigOak.readStorage(firstCache, (info) => {
//     console.log(info);
//   });
// });
// bigОаk.sепd(
//   "Коровье пастбище",
//   "поtе",
//   "Давайте громко каркать в 7 вечера",
//   () => сопsоlе.lоg("Записка получена.")
// );

// let fifteen = Promise.resolve(15);
// fifteen.then((value) => console.log(`Пoлyчeнo ${value}`));
// new Promise((_, reject) => reject(new Error("Сбой")))
//   .then((value) => соnsоlе.lоg("Обработчик 1"))
//   .catch((reason) => {
//     console.log("Oбнapyжeн сбой " + reason);
//     return "ничего";
//   })
//   .then((value) => console.log("Обработчик 2", value));

// class Timeout extends Error {}
// function request(nest, target, type, content) {
//   return new Promise((resolve, reject) => {
//     let done = false;
//     function attempt(n) {
//       nest.send(target, type, content, (failed, value) => {
//         done = true;
//         if (failed) reject(failed);
//         else resolve(value);
//       });
//       setTimeout(() => {
//         if (done) return;
//         else if (n < 3) attempt(n + 1);
//         else reject(new Timeout("Timed out"));
//       }, 250);
//     }
//     attempt(1);
//   });
// }

// async function locateScalpel(nest) {
//   let current = nest.name;
//   for (;;) {
//     let next = await anyStorage(nest, current, "scalpel");
//     if (next == current) return current;
//     current = next;
//   }
// }

// function locateScalpel2(nest) {
//   function loop(current) {
//     return anyStorage(nest, current, "scalpel").then((next) => {
//       if (next == current) return current;
//       else return loop(next);
//     });
//   }
//   return loop(nest.name);
// }

// locateScalpel(bigOak).then(console.log);
// // → Butcher's Shop
// locateScalpel2(bigOak).then(console.log);
// // → Butcher's Shop
