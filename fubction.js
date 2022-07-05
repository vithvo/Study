const person = {
  name: "Vi",
  age: undefined,
  isProgrammer: true,
  language: ["ru", "en"],
  greet() {
    console.log("greet from person");
  },

  info() {
    console.log("this:", this);
    console.info("Информация про человека по имени:", this.name);
  },
};

// const ageKey = "age";
// console.log(person.name);
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// console.log(person.key_4);
// person.greet();
// person.age++;
// person.language.push("ur");
// person["key_4"] = undefined;
// delete person["key_4"];
// console.log(person);
// console.log(person["key_4"]);
// const name = person.name;
// const age = person.age;
// const languages = person.language;
// const { name, age: personAge = 10, language } = person;
// console.log(name, personAge, language);
// console.log(person);
// // for (let key in person) {
// //   if (person.hasOwnProperty(key)) {
// //     console.log("key:", key);
// //     console.log("value:", person[key]);
// //   }
// // }
// Object.keys(person).forEach((key) => {
//   console.log("key:", key);
//   console.log("value:", person[key]);
// });

const logger = {
  keys(obj) {
    console.log("Object keys: ", Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`'${key}': ${this[key]}`);
    });
  },

  withParams(top = false, beetween = false, buttom = false) {
    if (top) {
      console.log("-------------Start-------------");
    }
    Object.keys(this).forEach((key) => {
      console.log(`'${key}': ${this[key]}`);
    });

    if (beetween) {
      console.log("----------------------------------");
    }

    if (buttom) {
      console.log("-------------End-------------");
    }
  },
};

// logger.keysAndValues.call(logger);
// const bound = logger.keys.bind(person);
// bound();
//logger.keys.call(person);

// logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
