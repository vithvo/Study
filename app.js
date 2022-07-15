// painting

// let circle = document.querySelector("circle");
// circle.setAttribute("fill", "cyan");

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for (let y = 10; y < 100; y += 10) {
//   cx.moveTo(10, y);
//   cx.lineTo(120, y);
// }
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// function branch(length, angle, scale) {
//   cx.fillRect(0, 0, 1, length);
//   if (length < 8) return;
//   cx.save();
//   cx.translate(0, length);
//   cx.rotate(-angle);
//   branch(length * scale, angle, scale);

//   cx.rotate(2 * angle);
//   branch(length * scale, angle, scale);
//   cx.restore();
// }
// cx.translate(300, 0);
// branch(60, 0.5, 0.8);

var results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen" },
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver" },
  { name: "No comment", count: 1222, color: "silver" },
];

let cx = document.querySelector("canvas").getContext("2d");
let total = results.reduce(function (sum, choice) {
  return sum + choice.count;
}, 0);

let currentAngle = -0.5 * Math.PI;
let centerX = 300,
  centerY = 150;

results.forEach(function (result) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);

  let middleAngle = currentAngle + 0.5 * sliceAngle;
  let textX = Math.cos(middleAngle) * 120 + centerX;
  let textY = Math.sin(middleAngle) * 120 + centerY;
  cx.textBaseLine = "middle";
  if (Math.cos(middleAngle) > 0) {
    cx.textAlign = "left";
  } else {
    cx.textAlign = "right";
  }
  cx.font = "15px sans-serif";
  cx.fillStyle = "black";
  cx.fillText(result.name, textX, textY);

  currentAngle += sliceAngle;
  cx.lineTo(centerX, centerY);
  cx.fillStyle = result.color;
  cx.fill();
});
