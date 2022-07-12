// The secret life of objects

// function speak(line) {
//   console.log(`${this.type} кролик говорит: '${line}'`);
// }
// let whiteRabbit = { type: "Бeлый", speak };
// let hungryRabbit = { type: "Голодный", speak };
// whiteRabbit.speak("ax вы yшки-yсики мои!" + "Кaк я оnaздывaю!");

// hungryRabbit.speak("Я бы съeл сeйчaс морковкy.");

// speak.call(hungryRabbit, "Я объeлся!");

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
// killerRabbit.type = "Боeвой";
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
// let weirdRabbit = new Rabbit("Стрaнный");
// let dissatisfiedRabbit = new Rabbit("Нeдоволbный");

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
// let killerRabbit = new Rabbit("yбийствeнный");
// let blackRabbit = new Rabbit("Чeрный");

// console.log(killerRabbit);
// console.log(blackRabbit);

// Rabbit.prototype.teeth = "мaлeнькиe";
// console.log(killerRabbit.teeth);

// killerRabbit.teeth = "длинныe, острыe и кровaвыe";
// console.log(killerRabbit.teeth);

// console.log(blackRabbit.teeth);

// console.log(Rabbit.prototype.teeth);

// Rabbit.prototype.toString = function () {
//   return `${this.type} кролик`;
// };
// console.log(String(blackRabbit));

// let ages = new Map();
// ages.set("Бopиcy", 39);
// ages.set("Ли", 22);
// ages.set("Юлии", 62);

// console.log(ages);

// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }
//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
// }

// class Matrixiterator {
//   constructor(matrix) {
//     this.x = 0;

//     this.y = 0;
//     this.matrix = matrix;
//   }
//   next() {
//     if (this.y == this.matrix.height) return { done: true };
//     let value = {
//       x: this.x,
//       y: this.y,
//       value: this.matrix.get(this.x, this.y),
//     };
//     this.x++;
//     if (this.x == this.matrix.width) {
//       this.x = 0;
//       this.y++;
//     }
//     return { value, done: false };
//   }
// }

// Matrix.prototype[Symbol.iterator] = function () {
//   return new Matrixiterator(this);
// };

// class SymmetricMatrix extends Matrix {
//   constructor(size, element = (x, y) => undefined) {
//     super(size, size, (x, y) => {
//       if (x < y) return element(y, x);
//       else return element(x, y);
//     });
//   }

//   set(x, y, value) {
//     super.set(x, y, value);
//     if (x != y) {
//       super.set(y, x, value);
//     }
//   }
// }
// let matrix = new SymmetricMatrix(2, (x, y) => `${x},${y}`);
// console.log(matrix);

// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }

//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }
// let temp = new Temperature(22);
// console.log(temp);

// ======================================================================

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let vec = new Vec(2, 3);
console.log(vec);

console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
