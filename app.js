// events

// // window.addEventListener("keydown", (event) => {
// //   if (event.key == "v") {
// //     document.body.style.background = "violet";
// //   }
// // });
// // window.addEventListener("keyup", (event) => {
// //   if (event.key == "v") {
// //     document.body.style.background = "";
// //   }
// // });

// // window.addEventListener("keydown", (event) => {
// //   if (event.key == " " && event.ctrlKey) {
// //     console.log("Продолжаем!");
// //   }
// // });

// // window.addEventListener("mousedown", (event) => {
// //   let dot = document.createElement("div");
// //   dot.className = "dot";
// //   dot.style.left = `${event.pageX - 4}px`;
// //   dot.style.top = `${event.pageY - 4}px`;
// //   console.log(dot.style.left);
// //   document.body.appendChild(dot);
// // });

// let lastX; // Отслеживает х-координату мыши
// let bar = document.querySelector("div");
// bar.addEventListener("mousedown", (event) => {
//   if (event.button == 0) {
//     lastX = event.clientX;
//     window.addEventListener("mousemove", moved);
//     event.preventDefault(); // Заблокировать возможность выделения
//   }
// });
// function moved(event) {
//   if (event.buttons == 0) {
//     window.removeEventListener("mousemove", moved);
//   } else {
//     let dist = event.clientX - lastX;
//     let newWidth = Math.max(10, bar.offsetWidth + dist);
//     bar.style.width = newWidth + "px";
//     lastX = event.clientX;
//   }
// }

// // Создание содержимого
// document.body.appendChild(
//   document.createTextNode("суnерархиэкстраультрамегаграндиозно ".repeat(1000))
// );
// let baar = document.querySelector("#progress");
// window.addEventListener("scroll", () => {
//   let max = document.body.scrollHeight - innerHeight;
//   baar.style.width = `${(pageYOffset / max) * 100}%`;
// });

let scheduled = null;
window.addEventListener("mousemove", (event) => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent =
        `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event;
});
