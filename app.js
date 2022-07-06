// Symbols

// let id = Symbol("id");
// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// // хотя прямой доступ по символу работает
// alert("Напрямую: " + user[id]);

// let globalSymbol = Symbol.for("bob");
// let localSymbol = Symbol("name");

// alert(Symbol.keyFor(globalSymbol)); // name, глобальный символ
// alert(Symbol.keyFor(localSymbol)); // undefined для неглобального символа

// alert(localSymbol.description); // name
// alert(globalSymbol.description); // name

// String

let str = "Ослик Иа-Иа посмотрел на виадук";

let target = "Иа"; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}
