// Exceptions

// class MultiplicatorUnitFailure extends Error {}

// let primitiveMuliply = (x, y) => {
//   if (Math.random() < 0.2) {
//     return x * y;
//   } else {
//     throw new MultiplicatorUnitFailure("Brunk");
//   }
// };

// function reliableMultiply(a, b) {
//   for (;;) {
//     try {
//       return primitiveMuliply(a, b);
//     } catch (e) {
//       if (!(e instanceof MultiplicatorUnitFailure)) throw e;
//     }
//   }
// }

// console.log(reliableMultiply(7, 8));

// ====================================================================

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Зanepтo!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
