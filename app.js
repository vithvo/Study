//  Arrays

// let a = [1, 2, 3, 4, 5, 6, 7];

// console.log(a[2]);

var JOURNAL = [
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },

  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },

  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
  },

  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
  },

  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
];

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i],
      index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("work", JOURNAL));

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("пицца", 0.069);
storePhi("тронул дерево", -0.081);
console.log(map);

for (var event in map)
  console.log(`Кореляция для '${event}' получается ${map[event]}`);
