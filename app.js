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

let browser = "Chrome";
if (browser == "Edge") {
  alert("You've got the Edge");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks good");
}
