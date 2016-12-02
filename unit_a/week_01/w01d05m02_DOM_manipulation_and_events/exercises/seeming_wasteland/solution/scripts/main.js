console.log("main.js linked");

var birds = [
  "starling",
  "sparrow",
  "jay",
  "dove"
];

// 1-1.
var houseEl = document.createElement("div");
houseEl.classList.add("dwelling");

// 1-2.
document.body.appendChild(houseEl);

// 2-1.
var topLevelHeaderEl = document.createElement("h1");
var spanEl = document.createElement("span");

// 2-2.
spanEl.textContent = "Seeming Wasteland";
spanEl.classList.add("shadowed");

// 2-3.
topLevelHeaderEl.appendChild(spanEl);

// 2-4.
document.body.appendChild(topLevelHeaderEl);

// 3-1.
var waldoEl = document.createElement("div");

// 3-2.
waldoEl.id = "waldo";

// 3-3.
document.body.appendChild(waldoEl);

// 4-1.
var birdListEl = document.createElement("ul");

// 4-2.
for (var i = 0;  i < birds.length; i++) {
  var birdEl = document.createElement("li");
  birdEl.classList.add("bird");
  birdEl.textContent = birds[i];
  birdListEl.appendChild(birdEl);
}

// 4-3.
document.body.appendChild(birdListEl);

// 5-1
var poolEl  = document.createElement("img"),
    treeEl  = document.createElement("div"),
    carEl   = document.createElement("div"),
    dogEl   = document.createElement("img"),
    mcDonEl = document.createElement("div");

poolEl.src            = "images/pool-fun.png";
poolEl.style.width    = "240px";
poolEl.style.position = "absolute";
poolEl.style.left     = "700px";
poolEl.style.bottom   = "-20px";

dogEl.src = "images/doge-sunglasses.gif"

// changes in style.css, adding these classes
treeEl.classList.add("tree");
carEl.classList.add("car");
dogEl.classList.add("dog");
mcDonEl.classList.add("mcdonalds");

document.body.appendChild(mcDonEl);
document.body.appendChild(poolEl);
document.body.appendChild(treeEl);
document.body.appendChild(carEl);
document.body.appendChild(dogEl);

// 5-2
spanEl.textContent = "Teeming Funland";
