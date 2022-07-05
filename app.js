// Object

// const person = {
//   name: "vi",
//   age: 25,
//   job: "fullstack",
// };

// const op = new Proxy(person, {
//   get(target, prop) {
//     return target[prop];
//   },
// });

// let browser = 'Edge';
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks good");
// }

// let browser = "Chrome";
// if (browser == "Edge") {
//   alert("You've got the Edge");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks good");
// }

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы в вели число 1");
    break;
  default:
    alert("Вы ввели число 2, а может 3");
}
