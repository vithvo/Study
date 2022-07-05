// // Event loop

// const timeout = setTimeout(() => {
//   console.log("after timeout");
// }, 2500);

// clearTimeout(timeout);

// const interval = setInterval(() => {
//   console.log("after timeout");
// }, 1000);

// // clearTimeout(interval);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("after two seconds");
// });

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
  return promise;
};

delay(2500)
  .then(() => {
    console.log("after two seconds");
  })

  .catch(() => {
    console.error(err);
  })

  .finally(() => {
    console.log("finally");
  });
