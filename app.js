var target = document.querySelector("#pixel");

var dot = document.querySelector("#pixel div");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

target.style.top = getRandomInt(0, 480) + "px";
target.style.left = getRandomInt(0, 640) + "px";

var colors = ["red", "blue", "green", "yellow", "black"];
dot.style.backgroundColor = colors[getRandomInt(0, 4)];

target.onclick = function(event) {
  alert("you win!");
}
