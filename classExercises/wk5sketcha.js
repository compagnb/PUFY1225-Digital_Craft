// Global Variables can be used in any functions
var counter = 0;
var font = 'comic Sans MS';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // random(limit);
  // random(lower limit, upper limit);

  fill(random(255), random(255),random(255));
  rect(20, 20, random(50, 300), random(50, 300));
 
}

