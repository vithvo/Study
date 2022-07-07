// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });

// let arr = [1, 2, 15];

// arr.sort(compareNumeric);

// alert(arr); // 1, 2, 15

// let arr = [1, -2, 15, 2, 0, 8, -88];

// compareNumeric = function (a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// };
// arr.sort(compareNumeric);
// arr.sort(function (a, b) {
//   console.log(a + " <> " + b);
// });

// console.log(arr);

// let arr = [1, 2, 4, 5, 77, 3, 45, -6, 15];

// arr.sort((a, b) => a - b);

// arr.sort(function (a, b) {
//   console.log(a + " <> " + b);
// });
// console.log(arr.reverse()); // 1, 2, 15

// let names = "Вася, Петя, Маша";

// let arr = names.split(", ");

// console.log(arr);

// for (let name of arr) {
//   console.log(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
// }

// let str = arr.join(" - ");
// console.log(str.toUpperCase());

// let arr = [1, 2, 3, 4, 5];

// // убрано начальное значение (нет 0 в конце)
// let result = arr.reduce((sum, current) => sum + current);

// console.log(result); // 15

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
