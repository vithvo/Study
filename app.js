// Project Robot

const roads = [
  "Дом Алисы-Дом Боба",
  "Дом Алисы-Почта",
  "Дом Дарии-Дом Эрни",
  "Дом Эрни-дом Греты",
  "Дом Греты-Магазин",
  "Рынок-Почта",
  "Рынок-Ратуша",
  "Дом Алисы-Склад",
  "Дом Боба-Ратуша",
  "Дом Дарии-Ратуша",
  "Дом Греты-Ферма",
  "Рынок-Ферма",
  "Рынок-Магазин",
  "Магазин-Ратуша",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
// console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return р;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Почта", [
  { place: "Почта", address: "Дом Алисы" },
]);
// let next = first.move("Дoм Алисы");

// console.log(next.place);

// console.log(next.parcels);

// console.log(first.place);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Bыnoлнeнo за ${turn} ходов`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Пepexoд в направлении ${action.direction}`);
  }
}

const mailRoute = [
  "Дом Алисы",
  "Сарай",
  "Дом Алисы",
  "Дом Боба",
  "Ратуша",
  "Дом Дарии",
  "Дом Эрни",
  "Дом Греты",
  "Магазин",
  "Дом Греты",
  "Ферма",
  "Рынок",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(l) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}
