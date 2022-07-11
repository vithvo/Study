// The secret life of objects

// function speak(line) {
//   console.log(`${this.type} кролик говорит: '${line}'`);
// }
// let whiteRabbit = { type: "Белый", speak };
// let hungryRabbit = { type: "Голодный", speak };
// whiteRabbit.speak("Ах вы ушки-усики мои!" + "Как я оnаздываю!");

// hungryRabbit.speak("Я бы съел сейчас морковку.");

// speak.call(hungryRabbit, "Я объелся!");

// function normalize() {
//   console.log(
//     this.coords.map(function (n) {
//       n = n / this.length;
//       return n;
//     })
//   );
// }
// normalize.call({ coords: [0, 2, 3], length: 5 });

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }
// normalize.call({ coords: [0, 2, 3], length: 5 });

// let empty = {};
// console.log(empty.toString);

// console.log(empty.toString());

let protoRabbit = {
  speak(line) {
    console.log(`${this.type} кролик говорит: '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Боевой";
killerRabbit.speak("nИФ-nAФ!");

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let alone = makeRabbit("Одинокий");
console.log(alone);
