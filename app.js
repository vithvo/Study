// for (let b = "#"; b.length < 8; b += "#") {
//   console.log(b);
// }

//======================================================================

// let x = 0;
// for (x = 0; x <= 100; x += 1) {
//   if (x % 5 == 0 && x % 3 == 0 && x != 0) console.log("FizzBuzz");
//   else console.log(x);
// }

// for (let n = 1; n <= 100; n++) {
//   let b = "";
//   if (n % 3 == 0) b += "Fizz";
//   if (n % 5 == 0) b += "Buzz";
//   console.log(b || n);
// }

//======================================================================

let size = 8;

let cell = "";

for (let n = 0; n < size; n++) {
  for (let k = 0; k < size; k++) {
    if ((n + k) % 2 == 0) {
      cell += "#";
    } else cell += " ";
  }
  cell += "\n";
}

console.log(cell);
