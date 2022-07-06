// "use strict";

// Objects

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // ключи
//   alert(key + " " + user[key]); // name, age, isAdmin
//   // значения ключей
//   // alert(user[key]); // John, 30, true
// }

// let codes = {
//   49: "Германия",
//   41: "Швейцария",
//   44: "Великобритания",
//   // ..,
//   1: "США",
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// marry();

// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   alert(this.name);
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// console.log(user);

// admin["f"](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// function sayHi() {
//   alert(this);
// }

// console.log(sayHi()); // undefined

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };

// let user = makeUser();

// alert( user.ref().name ); // Джон

// let user = new (function () {
//   this.name = "Вася";
//   this.isAdmin = false;

//   // ...другой код для создания пользователя
//   // возможна любая сложная логика и выражения
//   // локальные переменные и т. д.
// })();

// let user = {
//   name: "Вася",
// };

// let id = Symbol("id");

// user[id] = 1;

// alert(user[id]);

// console.log(user);
