//  Arrays

// let a = [1, 2, 3, 4, 5, 6, 7];

// console.log(a[2]);

// var JOURNAL = [
//   { events: ["carrot", "exercise", "weekend"], squirrel: false },
//   {
//     events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
//     squirrel: false,
//   },
//   {
//     events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: [
//       "brussel sprouts",
//       "ice cream",
//       "brushed teeth",
//       "computer",
//       "weekend",
//     ],
//     squirrel: false,
//   },
//   {
//     events: [
//       "potatoes",
//       "candy",
//       "brushed teeth",
//       "exercise",
//       "weekend",
//       "dentist",
//     ],
//     squirrel: false,
//   },
//   {
//     events: [
//       "brussel sprouts",
//       "pudding",
//       "brushed teeth",
//       "running",
//       "weekend",
//     ],
//     squirrel: false,
//   },
//   {
//     events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
//     squirrel: false,
//   },
//   {
//     events: ["bread", "beer", "brushed teeth", "cycling", "work"],
//     squirrel: false,
//   },
//   { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
//   { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
//   { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
//   { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
//   {
//     events: ["lettuce", "brushed teeth", "television", "weekend"],
//     squirrel: false,
//   },
//   { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
//   { events: ["brushed teeth", "computer", "work"], squirrel: false },
//   { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
//   { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["brushed teeth", "work"], squirrel: false },
//   { events: ["cauliflower", "reading", "weekend"], squirrel: false },
//   { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "reading", "work"],
//     squirrel: false,
//   },
//   {
//     events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
//     squirrel: false,
//   },
//   { events: ["spaghetti", "nachos", "work"], squirrel: false },
//   {
//     events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
//     squirrel: false,
//   },
//   { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
//   {
//     events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: ["potatoes", "ice cream", "brushed teeth", "work"],
//     squirrel: false,
//   },
//   { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["potatoes", "exercise", "work"], squirrel: false },
//   { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
//   { events: ["lasagna", "ice cream", "work"], squirrel: false },
//   { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
//   {
//     events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
//     squirrel: false,
//   },
//   { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
//   { events: ["carrot", "work"], squirrel: false },
//   { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
//   { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "reading", "work"],
//     squirrel: false,
//   },
//   {
//     events: ["spaghetti", "pudding", "television", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: ["bread", "brushed teeth", "exercise", "weekend"],
//     squirrel: false,
//   },
//   { events: ["lasagna", "peanuts", "work"], squirrel: true },
//   { events: ["pizza", "work"], squirrel: false },
//   { events: ["potatoes", "exercise", "work"], squirrel: false },
//   { events: ["brushed teeth", "exercise", "work"], squirrel: false },
//   {
//     events: ["spaghetti", "brushed teeth", "television", "work"],
//     squirrel: false,
//   },
//   { events: ["pizza", "cycling", "weekend"], squirrel: false },
//   { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
//   { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
//   {
//     events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
//     squirrel: false,
//   },
//   { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
//     squirrel: false,
//   },
//   {
//     events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: ["lasagna", "brushed teeth", "cycling", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: [
//       "cauliflower",
//       "peanuts",
//       "brushed teeth",
//       "computer",
//       "work",
//       "touched tree",
//     ],
//     squirrel: false,
//   },
//   {
//     events: ["lettuce", "brushed teeth", "television", "work"],
//     squirrel: false,
//   },
//   {
//     events: ["potatoes", "brushed teeth", "computer", "work"],
//     squirrel: false,
//   },
//   { events: ["bread", "candy", "work"], squirrel: false },
//   { events: ["potatoes", "nachos", "work"], squirrel: false },
//   {
//     events: ["carrot", "pudding", "brushed teeth", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
//     squirrel: false,
//   },
//   { events: ["brussel sprouts", "running", "work"], squirrel: false },
//   { events: ["brushed teeth", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["candy", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["brussel sprouts", "brushed teeth", "computer", "work"],
//     squirrel: false,
//   },
//   { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
//   { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
//   {
//     events: ["spaghetti", "candy", "television", "work", "touched tree"],
//     squirrel: false,
//   },
//   { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
//     squirrel: false,
//   },
//   { events: ["pizza", "brushed teeth", "work"], squirrel: false },
//   { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
//   {
//     events: ["bread", "beer", "computer", "weekend", "touched tree"],
//     squirrel: false,
//   },
//   { events: ["brushed teeth", "running", "work"], squirrel: false },
//   {
//     events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
//     squirrel: false,
//   },
//   {
//     events: ["lasagna", "brushed teeth", "television", "work"],
//     squirrel: false,
//   },
//   {
//     events: ["cauliflower", "brushed teeth", "running", "work"],
//     squirrel: false,
//   },
//   { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["carrot", "reading", "weekend"], squirrel: false },
//   { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
//   { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
//   {
//     events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
//     squirrel: false,
//   },
//   { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
//   { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
//   {
//     events: ["bread", "brushed teeth", "television", "weekend"],
//     squirrel: false,
//   },
//   {
//     events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
//     squirrel: false,
//   },
// ];

// function hasEvent(event, entry) {
//   return entry.events.indexOf(event) != -1;
// }
// function tableFor(event, journal) {
//   var table = [0, 0, 0, 0];
//   for (var i = 0; i < journal.length; i++) {
//     var entry = journal[i],
//       index = 0;
//     if (hasEvent(event, entry)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }
// // console.log(tableFor("work", JOURNAL));

// // var map = {};
// // function storePhi(event, phi) {
// //   map[event] = phi;
// // }

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) *
//         (table[0] + table[1]) *
//         (table[1] + table[3]) *
//         (table[0] + table[2])
//     )
//   );
// }

// //   console.log(`Кореляция для '${event}' получается ${map[event]}`);

// function gatherCorrelations(journal) {
//   var phis = {};
//   for (var entry = 0; entry < journal.length; entry++) {
//     var events = journal[entry].events;
//     for (var i = 0; i < events.length; i++) {
//       var event = events[i];
//       if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
//     }
//   }
//   return phis;
// }
// var correlations = gatherCorrelations(JOURNAL);

// // → 0.068599434
// // for (var event in correlations) console.log(event + ": " + correlations[event]);

// for (var event in correlations) {
//   var correlation = correlations[event];
//   if (correlation > 0.1 || correlation < -0.1)
//     console.log(event + ": " + correlation);
// }

// for (var i = 0; i < JOURNAL.length; i++) {
//   var entry = JOURNAL[i];
//   if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
//     entry.events.push("peanuts brushed teeth");
// }
// console.log(phi(tableFor("peanuts brushed teeth", JOURNAL)));
// // → 1

// function addEntry(squirrel) {
//   var entry = { events: [], squirrel: squirrel };
//   for (var i = 1; i < arguments.length; i++) entry.events.push(arguments[i]);
//   JOURNAL.push(entry);
// }
// addEntry(true, "работа", "тронул дерево", "пицца", "пробежка", "телевизор");

// function randomPointOnCircle(radius) {
//   var angle = Math.random() * 2 * Math.PI;
//   return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
// }
// console.log(randomPointOnCircle(2));
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100));

//====================================================================

// range = (a, b, step = a < b ? 1 : -1) => {
//   mass = [];
//   if (step > 0) {
//     for (let i = a; i <= b; i += step) {
//       mass.push(i);
//     }
//   } else {
//     for (let i = a; i >= b; i += step) {
//       mass.push(i);
//     }
//   }
//   return mass;
// };

// array = range(10, 1);
// console.log(array);

// function sum(mass) {
//   let total = 0;
//   for (let value of mass) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum(range(1, 10, 1)));

// //====================================================================

// reverseArray = (q) => {
//   yarra = [];
//   for (let i = q.length - 1; i >= 0; i--) {
//     yarra.push(q[i]);
//   }
//   return yarra;
// };

// reverseArrayInPlace = (q) => {
//   for (let i = 0; i < Math.floor(q.length / 2); i++) {
//     let old = q[i];
//     q[i] = q[q.length - 1 - i];
//     q[q.length - 1 - i] = old;
//   }
//   return array;
// };

// newArray = reverseArray(array);
// console.log(newArray);
// console.log(reverseArray(array) == newArray);
// console.log(reverseArray(["A", "B", "C"]));

// reverseArrayInPlace(array);
// console.log(array);

// console.log(array == reverseArrayInPlace(array));
// // → [5, 4, 3, 2, 1]

// arrayToList = (arr) => {
//   let list = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = { value: arr[i], rest: list };
//   }
//   return list;
// };

// console.log(arrayToList([1, 2, 3]));

// function listToArray(list) {
//   let array1 = [];
//   for (let node = list; node; node = node.rest) {
//     array1.push(node.value);
//   }
//   return array1;
// }

// console.log(listToArray(arrayToList([1, 2, 3])));

// let obj = {
//   name: "vi",
//   value: 22,
// };
// let obj1 = {
//   name: "vi",
//   value: 22,
// };

// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a == null || typeof a != "object" || b == null || typeof b != "object")
//     return false;

//   let keysA = Object.keys(a),
//     keysB = Object.keys(b);

//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }

// console.log(deepEqual(2, null));

// function forEach(array, action) {
//   for (var i = 0; i < array.length; i++) action(array[i]);
// }

// let numbers = [1, 2, 3, 4, 5],
//   sum = 0;
// forEach(numbers, function (number) {
//   sum += number;
//   console.log(sum);
// });
// console.log(sum);
// // → 15

function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}
repeat(5, function (n) {
  unless(n % 2, function () {
    console.log(n, "is even");
  });
});
