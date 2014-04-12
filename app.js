var target = document.querySelector("#pixel");
var dot = document.querySelector("#pixel div");

var score = 0;
var lives = 3;
var scoreElement = document.querySelector("#score");
var livesElement = document.querySelector("#lives");
var game = document.querySelector("#game");
var image = document.querySelector("#image");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var COLORS = ["#f00", "#0f0", "#00f"];
var NUM_IMG = []
function randomize() {
  target.style.top = getRandomInt(10, 460) + "px";
  target.style.left = getRandomInt(10, 620) + "px";
  dot.style.backgroundColor = COLORS[getRandomInt(0, 2)];
  game.style.backgroundImage = "url('img/0.jpg')";
}

randomize();

var yes = document.querySelector('#yes');
var no = document.querySelector('#no');

target.onclick = function(event) {
  event.stopPropagation();
  score += 1;
  scoreElement.innerHTML = ""+score;
  yes.className = "";
  setTimeout(function() {
    yes.className = "active";
  },10);
  randomize();
}

game.onclick = function(event) {
  lives -= 1;
  if (lives <= 0) {
    alert("you suck and lose");
    window.location.reload();
  }
  livesElement.innerHTML = ""+lives;
  scoreElement.innerHTML = ""+score;
  no.className = "";
  setTimeout(function() {
    no.className = "active";
  },10);
  randomize();
}
