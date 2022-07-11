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

// let protoRabbit = {
//   speak(line) {
//     console.log(`${this.type} кролик говорит: '${line}'`);
//   },
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "Боевой";
// killerRabbit.speak("nИФ-nAФ!");

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// let alone = makeRabbit("Одинокий");
// console.log(alone);

// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} кролик говорит: '${line}'`);
// };
// let weirdRabbit = new Rabbit("Странный");
// let dissatisfiedRabbit = new Rabbit("Недоволbный");

// console.log(weirdRabbit);
// console.log(dissatisfiedRabbit);

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`${this.type} кролик говорит: '${line}'`);
//   }
// }
// let killerRabbit = new Rabbit("Убийственный");
// let blackRabbit = new Rabbit("Черный");

// console.log(killerRabbit);
// console.log(blackRabbit);

// Rabbit.prototype.teeth = "маленькие";
// console.log(killerRabbit.teeth);

// killerRabbit.teeth = "длинные, острые и кровавые";
// console.log(killerRabbit.teeth);

// console.log(blackRabbit.teeth);

// console.log(Rabbit.prototype.teeth);

// Rabbit.prototype.toString = function () {
//   return `${this.type} кролик`;
// };
// console.log(String(blackRabbit));

class Matrix {
  constructor(width, height, element = (х, у) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let у = 0; у < height; у++) {
      for (let х = 0; х < width; х++) {
        this.content[y * width + х] = element(x, у);
      }
    }
  }
  get(x, у) {
    return this.content[y * this.width + х];
  }
  set(x, у, value) {
    this.content[y * this.width + х] = value;
  }
}
// get(x, у) {
// return this.content[y * this.width + х];
// }

// set(x, у, value) {
// this.content[y * this.width + х] value;
// }
// }
